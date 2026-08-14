#!/usr/bin/env python3
"""
Generate Menelik Admasu resume PDF for the portfolio.

Usage:
  python3 scripts/generate-resume.py
  python3 scripts/generate-resume.py -o resume.pdf

Requires: reportlab
"""
from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import sys
from datetime import date
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

# Project root (parent of scripts/)
ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUT = ROOT / "resume.pdf"
VERSIONS_PATH = ROOT / "content" / "resume-versions.json"
VERSIONS_DIR = ROOT / "static" / "resume-versions"

# --- Brand / layout ---
ACCENT = HexColor("#1e40af")
MUTED = HexColor("#475569")
DARK = HexColor("#0f172a")
RULE = HexColor("#cbd5e1")

PAGE = A4  # 210mm × 297mm (full ISO A4)
# Comfortable margins so content uses the full printable A4 area.
# generate() only tightens if content would overflow a second page.
MARGIN = 14 * mm
ONE_PAGE = True

# --- Content (single source of truth for the PDF) ---
RESUME = {
    "name": "Menelik Admasu",
    "tagline": "Full-Stack App Developer · BSc Computer Science · Computer Administrator",
    "location": "Bahir Dar, Ethiopia",
    "education_line": "Bahir Dar University (2022 – 2026, completed)",
    "emails": ["linuxos777@gmail.com"],
    "phones": ["+251 918 006 053", "+251 977 832 379"],
    "links": ["menelik.webhop.me"],
    "summary": (
        "Full-stack app developer and Computer Science graduate (BSc, Bahir Dar University, 2022–2026). "
        "I build complete applications — from user interfaces to back-end logic, APIs, and deployment. "
        "I am also an experienced, multitasking computer administrator with strong skills in technical training, "
        "hardware and networking, cybersecurity, and keeping systems running smoothly. I care about clean, reliable "
        "software and practical digital products."
    ),
    "experience": [
        {
            "title": "Trainer — Dejen TVET College",
            "meta": "2004 – 2012 · Governmental TVET",
            "bullets": [
                "Technical training and computer-related instruction for TVET learners",
                "Computer staff support — systems, labs, and day-to-day IT operations",
            ],
        },
        {
            "title": "Trainer — Debre Elias TVET College",
            "meta": "2012 – 2014 · Governmental TVET",
            "bullets": [
                "Continued trainer role supporting students and institutional technology use",
            ],
        },
    ],
    "experience_note": "Total work experience: 10 years",
    "education": [
        {
            "title": "Bachelor of Science in Computer Science",
            "meta": "Bahir Dar University · 2022 – 2026 · Completed",
            "detail": (
                "Coursework: Data Structures &amp; Algorithms, OOP, Database Systems, Web Development, "
                "Software Engineering, Computer Networks, Operating Systems"
            ),
        },
        {
            "title": "Computer Hardware &amp; Networking Technology",
            "meta": "Bahir Dar Poly Technical College · 2002 – 2004 · GPA 3.45 · Completed",
            "detail": None,
        },
        {
            "title": "Computer Hardware &amp; Networking Service",
            "meta": "Debre Markos Poly College · 2007 · Completed",
            "detail": None,
        },
    ],
    "certs": [
        "Computer Hardware and Networking Technology Level IV",
        "National Qualifications Certificates (COC)",
        "Certificate in Computer Cybersecurity",
        "Best Worker of the Year (2010) — Dejen TVET College",
    ],
    "skills": [
        (
            "<b>Full-stack development:</b> HTML, CSS, JavaScript, Python, Java, Git, SQL, "
            "responsive design, APIs, deployment"
        ),
        (
            "<b>IT &amp; training:</b> Computer administration, hardware &amp; networking, "
            "system administration, technical training"
        ),
        "<b>Other:</b> Web site design, video editing, Cybersecurity, communication, continuous learning",
    ],
    "projects": [
        ("Yeni Pro CV", "procv.is-cool.dev", "Privacy-first ATS-friendly resume builder"),
        ("Yeni Movie", "yeni-movie.vercel.app", "Movies &amp; TV discovery with trailers and ratings"),
        ("Yeni Typing Learning", "fidel.is-local.dev", "Typing tutor (WPM &amp; accuracy)"),
        ("Yeni Exam", "yeniexams.vercel.app", "Exit exam practice generator"),
        ("Windows XP Portfolio", "menelik.webhop.me", "Interactive OS-style portfolio"),
    ],
    "volunteer": "Technology training for the community and organizations.",
    "languages": (
        "English — Professional working proficiency · "
        "Amharic — Professional working proficiency"
    ),
}


def _register_fonts():
    """Prefer monospace (DejaVu Sans Mono) for a clean terminal-style resume."""
    candidates = [
        (
            Path("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"),
            Path("/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"),
        ),
        (
            Path("/usr/share/fonts/SlidesCarnival/google/JetBrains Mono/static/JetBrainsMono-Regular.ttf"),
            Path("/usr/share/fonts/SlidesCarnival/google/JetBrains Mono/static/JetBrainsMono-Bold.ttf"),
        ),
        (
            Path("/usr/share/fonts/SlidesCarnival/google/Roboto Mono/static/RobotoMono-Regular.ttf"),
            Path("/usr/share/fonts/SlidesCarnival/google/Roboto Mono/static/RobotoMono-Bold.ttf"),
        ),
    ]
    for regular, bold in candidates:
        if regular.exists():
            pdfmetrics.registerFont(TTFont("ResumeMono", str(regular)))
            bold_path = bold if bold.exists() else regular
            pdfmetrics.registerFont(TTFont("ResumeMono-Bold", str(bold_path)))
            # So <b>…</b> in Paragraph markup switches to the bold face
            pdfmetrics.registerFontFamily(
                "ResumeMono",
                normal="ResumeMono",
                bold="ResumeMono-Bold",
                italic="ResumeMono",
                boldItalic="ResumeMono-Bold",
            )
            return "ResumeMono", "ResumeMono-Bold"
    # Built-in Courier is monospace but limited Unicode
    pdfmetrics.registerFontFamily(
        "Courier",
        normal="Courier",
        bold="Courier-Bold",
        italic="Courier-Oblique",
        boldItalic="Courier-BoldOblique",
    )
    return "Courier", "Courier-Bold"


def build_styles(density: float = 1.0):
    """Build paragraph styles. density < 1.0 = tighter (more content on one page)."""
    font, font_bold = _register_fonts()
    base = getSampleStyleSheet()
    d = max(0.72, min(1.0, float(density)))

    def fs(px: float) -> float:
        return round(px * d, 2)

    def sp(mm_val: float) -> float:
        return mm_val * d * mm

    # Full-size A4 typography (density scales down only if needed to stay on one page)
    specs = {
        "RName": dict(fontName=font_bold, fontSize=fs(18), textColor=DARK, spaceAfter=sp(1.2), leading=fs(22)),
        "RTag": dict(fontName=font, fontSize=fs(9.5), textColor=ACCENT, spaceAfter=sp(0.9), leading=fs(12)),
        "RContact": dict(fontName=font, fontSize=fs(9), textColor=MUTED, spaceAfter=sp(1.8), leading=fs(12.5)),
        "RH2": dict(
            fontName=font_bold,
            fontSize=fs(11),
            textColor=ACCENT,
            spaceBefore=sp(2.6),
            spaceAfter=sp(1.0),
            leading=fs(13),
        ),
        "RBody": dict(fontName=font, fontSize=fs(9), textColor=DARK, leading=fs(11.5), spaceAfter=sp(0.9)),
        "RJob": dict(fontName=font_bold, fontSize=fs(9.5), textColor=DARK, leading=fs(12), spaceBefore=sp(1.0)),
        "RMeta": dict(fontName=font, fontSize=fs(8.5), textColor=MUTED, leading=fs(10.5), spaceAfter=sp(0.5)),
        "RBullet": dict(fontName=font, fontSize=fs(8.5), textColor=DARK, leading=fs(11), leftIndent=8, spaceAfter=sp(0.35)),
        "RIconRow": dict(fontName=font, fontSize=fs(9), textColor=MUTED, leading=fs(12.5), spaceAfter=sp(0.3)),
        "RNoteBold": dict(fontName=font_bold, fontSize=fs(9), textColor=DARK, leading=fs(11.5), spaceAfter=sp(0.9)),
    }
    for name, kw in specs.items():
        if name in base.byName:
            # Replace so repeated generate() calls with different density work
            style = base[name]
            for k, v in kw.items():
                setattr(style, k, v)
        else:
            base.add(ParagraphStyle(name=name, **kw))
    return base


def section_rule(density: float = 1.0):
    d = max(0.72, min(1.0, float(density)))
    return HRFlowable(
        width="100%",
        thickness=0.5,
        color=RULE,
        spaceBefore=0.2 * mm * d,
        spaceAfter=0.5 * mm * d,
    )


def pdf_page_count(path: Path) -> int:
    """Return number of pages in a PDF (1 if unknown)."""
    try:
        from pypdf import PdfReader

        return max(1, len(PdfReader(str(path)).pages))
    except Exception:
        try:
            # Minimal fallback: count /Type /Page objects (approx)
            raw = path.read_bytes()
            return max(1, raw.count(b"/Type /Page") - raw.count(b"/Type /Pages"))
        except Exception:
            return 1


def header_block(styles, data: dict, density: float = 1.0):
    # Labeled contact block under the name
    email = data["emails"][0] if data.get("emails") else ""
    phones = " · ".join(data.get("phones") or [])
    location = data.get("location") or ""
    website = (data.get("links") or [""])[0]
    d = max(0.72, min(1.0, float(density)))
    # Styled contact icons (accent-colored symbols + bold labels)
    # Color matches ACCENT (#1e40af)
    icon = '<font color="#1e40af" size="11">'
    icone = "</font>"
    label = '<font color="#0f172a"><b>'
    labele = "</b></font>"
    val = '<font color="#475569">'
    vale = "</font>"
    rows = [
        f"{icon}✉{icone}  {label}E-mail:{labele}  {val}{email}{vale}",
        f"{icon}☎{icone}  {label}Phone:{labele}  {val}{phones}{vale}",
        f"{icon}●{icone}  {label}Location:{labele}  {val}{location}{vale}",
        f"{icon}◉{icone}  {label}Website:{labele}  {val}{website}{vale}",
    ]
    contact_bits = "<br/>".join(rows)
    return [
        Paragraph(data["name"], styles["RName"]),
        Paragraph(data["tagline"], styles["RTag"]),
        Paragraph(contact_bits, styles["RContact"]),
        HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=1 * mm * d),
    ]


def job_block(styles, job: dict):
    parts = [
        Paragraph(job["title"], styles["RJob"]),
        Paragraph(job["meta"], styles["RMeta"]),
    ]
    for b in job.get("bullets") or []:
        parts.append(Paragraph(f"• {b}", styles["RBullet"]))
    return KeepTogether(parts)


def edu_block(styles, edu: dict):
    parts = [
        Paragraph(edu["title"], styles["RJob"]),
        Paragraph(edu["meta"], styles["RMeta"]),
    ]
    if edu.get("detail"):
        parts.append(Paragraph(edu["detail"], styles["RBody"]))
    return KeepTogether(parts)


def build_story(styles, data: dict, density: float = 1.0):
    """Build flowables for a single-page resume. density scales spacing/fonts."""
    d = max(0.72, min(1.0, float(density)))
    story = []
    story.extend(header_block(styles, data, density=d))

    story.append(Paragraph("Professional Summary", styles["RH2"]))
    story.append(section_rule(d))
    story.append(Paragraph(data["summary"], styles["RBody"]))

    story.append(Paragraph("Work Experience", styles["RH2"]))
    story.append(section_rule(d))
    for job in data["experience"]:
        story.append(job_block(styles, job))
    if data.get("experience_note"):
        story.append(Spacer(1, 0.4 * mm * d))
        # Explicit bold face (font family + <b>) so it always renders heavy on mono
        note = data["experience_note"]
        style = styles["RNoteBold"] if "RNoteBold" in styles.byName else styles["RBody"]
        story.append(Paragraph(f"<b>{note}</b>", style))

    story.append(Paragraph("Education", styles["RH2"]))
    story.append(section_rule(d))
    for edu in data["education"]:
        story.append(edu_block(styles, edu))

    story.append(Paragraph("Certificates &amp; Awards", styles["RH2"]))
    story.append(section_rule(d))
    for c in data["certs"]:
        story.append(Paragraph(f"• {c}", styles["RBullet"]))

    story.append(Paragraph("Skills", styles["RH2"]))
    story.append(section_rule(d))
    for line in data["skills"]:
        story.append(Paragraph(line, styles["RBody"]))

    story.append(Paragraph("Selected Projects", styles["RH2"]))
    story.append(section_rule(d))
    for name, url, desc in data["projects"]:
        story.append(Paragraph(f"• <b>{name}</b> — {url} — {desc}", styles["RBullet"]))

    story.append(Paragraph("Volunteer · Languages", styles["RH2"]))
    story.append(section_rule(d))
    story.append(
        Paragraph(
            f"Volunteer: {data['volunteer']}<br/>Languages: {data['languages']}",
            styles["RBody"],
        )
    )
    return story


def load_versions() -> dict:
    if VERSIONS_PATH.exists():
        return json.loads(VERSIONS_PATH.read_text(encoding="utf-8"))
    return {
        "current": "1.0.0",
        "updated": str(date.today()),
        "slug": "Menelik-Admasu-Resume",
        "pdf": "/resume.pdf",
        "versions": [],
    }


def save_versions(data: dict) -> None:
    VERSIONS_PATH.parent.mkdir(parents=True, exist_ok=True)
    VERSIONS_PATH.write_text(
        json.dumps(data, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )


def bump_semver(ver: str, part: str) -> str:
    m = re.match(r"^(\d+)\.(\d+)\.(\d+)$", (ver or "0.0.0").strip())
    if not m:
        return "1.0.0"
    major, minor, patch = map(int, m.groups())
    if part == "major":
        return f"{major + 1}.0.0"
    if part == "minor":
        return f"{major}.{minor + 1}.0"
    return f"{major}.{minor}.{patch + 1}"


def generate(output: Path, version: str | None = None) -> Path:
    """Write resume PDF. Always produces a single A4 page when ONE_PAGE is True."""
    output = output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    meta = load_versions()
    ver = version or meta.get("current") or "1.0.0"

    # Prefer full-size A4 (density 1.0, 14mm margins). Only step down if content overflows.
    densities = [1.0, 0.96, 0.92, 0.88, 0.84, 0.80, 0.76] if ONE_PAGE else [1.0]
    margins = [MARGIN, 13 * mm, 12 * mm, 11 * mm, 10 * mm, 9 * mm, 8 * mm] if ONE_PAGE else [MARGIN]

    last_pages = 0
    used_density = densities[0]
    used_margin = margins[0]

    for density, margin in zip(densities, margins):
        styles = build_styles(density=density)
        doc = SimpleDocTemplate(
            str(output),
            pagesize=PAGE,
            leftMargin=margin,
            rightMargin=margin,
            topMargin=margin,
            bottomMargin=margin,
            title=f"Menelik Admasu — Resume v{ver}",
            author="Menelik Admasu",
            subject=f"Full-Stack App Developer Resume (v{ver})",
            creator=f"Menelik OS resume generator · v{ver}",
            keywords=f"resume, CV, Menelik Admasu, v{ver}, one-page",
        )
        doc.build(build_story(styles, RESUME, density=density))
        used_density = density
        used_margin = margin
        last_pages = pdf_page_count(output)
        if last_pages <= 1:
            break

    if ONE_PAGE and last_pages > 1:
        print(
            f"WARNING: resume still spans {last_pages} pages at density={used_density:.2f}; "
            "trim content in RESUME dict to guarantee one page.",
            file=sys.stderr,
        )
    else:
        print(f"One-page OK (density={used_density:.2f}, margin={used_margin / mm:.1f}mm, pages={last_pages})")

    return output


def register_version(
    pdf_path: Path,
    version: str,
    label: str,
    changes: list[str],
) -> dict:
    """Write versioned archive copy + update resume-versions.json."""
    meta = load_versions()
    slug = meta.get("slug") or "Menelik-Admasu-Resume"
    VERSIONS_DIR.mkdir(parents=True, exist_ok=True)
    archived_name = f"{slug}-v{version}.pdf"
    archived_path = VERSIONS_DIR / archived_name
    shutil.copy2(pdf_path, archived_path)

    # Also keep stable root resume.pdf (already written by generate)
    entry = {
        "version": version,
        "date": str(date.today()),
        "label": label or f"Release {version}",
        "changes": changes or [],
        "file": f"/static/resume-versions/{archived_name}",
        "downloadName": archived_name,
    }

    versions = [v for v in meta.get("versions") or [] if v.get("version") != version]
    versions.insert(0, entry)
    meta["versions"] = versions
    meta["current"] = version
    meta["updated"] = str(date.today())
    meta["pdf"] = "/resume.pdf"
    meta["slug"] = slug
    save_versions(meta)
    return meta


def main(argv=None):
    parser = argparse.ArgumentParser(description="Generate portfolio resume PDF")
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=DEFAULT_OUT,
        help=f"Output path (default: {DEFAULT_OUT})",
    )
    parser.add_argument(
        "--version",
        type=str,
        default=None,
        help="Explicit semver (e.g. 1.2.0). Default: current in resume-versions.json",
    )
    parser.add_argument(
        "--bump",
        choices=("patch", "minor", "major"),
        default=None,
        help="Bump current version before generating",
    )
    parser.add_argument(
        "--label",
        type=str,
        default="",
        help="Short release label stored in version history",
    )
    parser.add_argument(
        "--change",
        action="append",
        default=[],
        help="Changelog bullet (repeatable)",
    )
    parser.add_argument(
        "--no-register",
        action="store_true",
        help="Only write PDF; do not update resume-versions.json / archive",
    )
    args = parser.parse_args(argv)

    meta = load_versions()
    current = meta.get("current") or "1.0.0"
    if args.version:
        ver = args.version.lstrip("v")
    elif args.bump:
        ver = bump_semver(current, args.bump)
    else:
        ver = current

    path = generate(args.output, version=ver)
    size = path.stat().st_size
    print(f"Wrote {path} ({size:,} bytes) · v{ver}")

    if not args.no_register:
        label = args.label or f"Resume v{ver}"
        changes = args.change or [f"Generated resume PDF v{ver}"]
        meta = register_version(path, ver, label, changes)
        print(f"Registered version {ver} → {VERSIONS_PATH}")
        print(f"Archive: {VERSIONS_DIR / (meta['slug'] + '-v' + ver + '.pdf')}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
