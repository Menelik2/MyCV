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

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUT = ROOT / "resume.pdf"
VERSIONS_PATH = ROOT / "content" / "resume-versions.json"
VERSIONS_DIR = ROOT / "static" / "resume-versions"

ACCENT = HexColor("#1e40af")
MUTED = HexColor("#475569")
DARK = HexColor("#0f172a")
RULE = HexColor("#cbd5e1")

PAGE = A4
MARGIN = 14 * mm
ONE_PAGE = True

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
                "Coursework: Data Structures & Algorithms, OOP, Database Systems, Web Development, "
                "Software Engineering, Computer Networks, Operating Systems"
            ),
        },
        {
            "title": "Computer Hardware & Networking Technology",
            "meta": "Bahir Dar Poly Technical College · 2002 – 2004 · GPA 3.45 · Completed",
            "detail": None,
        },
        {
            "title": "Computer Hardware & Networking Service",
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
            "<b>IT & training:</b> Computer administration, hardware & networking, "
            "system administration, technical training"
        ),
        "<b>Other:</b> Web site design, video editing, Cybersecurity, communication, continuous learning",
    ],
    "projects": [
        ("Yeni Pro CV", "procv.is-cool.dev", "Privacy-first ATS-friendly resume builder"),
        ("Yeni Movie", "yeni-movie.vercel.app", "Movies & TV discovery with trailers and ratings"),
        ("Yeni Typing Learning", "fidel.is-local.dev", "Typing tutor (WPM & accuracy)"),
        ("Yeni Exam", "yeniexams.vercel.app", "Exit exam practice generator"),
        ("Windows XP Portfolio", "menelik.webhop.me", "Interactive OS-style portfolio"),
    ],
    "volunteer": "Training communities and organizations in practical technology skills.",
    "languages": (
        "English — Professional working proficiency · "
        "Amharic — Professional working proficiency"
    ),
}


def _register_fonts():
    """Prefer Calibri for resume PDF (Carlito is metric-compatible open alternative)."""
    candidates = [
        (
            Path("/usr/share/fonts/truetype/msttcorefonts/Calibri.ttf"),
            Path("/usr/share/fonts/truetype/msttcorefonts/Calibri-Bold.ttf"),
        ),
        (
            Path("C:/Windows/Fonts/calibri.ttf"),
            Path("C:/Windows/Fonts/calibrib.ttf"),
        ),
        (
            Path("/mnt/c/Windows/Fonts/calibri.ttf"),
            Path("/mnt/c/Windows/Fonts/calibrib.ttf"),
        ),
        (
            Path("/usr/share/fonts/truetype/crosextra/Carlito-Regular.ttf"),
            Path("/usr/share/fonts/truetype/crosextra/Carlito-Bold.ttf"),
        ),
        (
            Path("/usr/share/fonts/truetype/carlito/Carlito-Regular.ttf"),
            Path("/usr/share/fonts/truetype/carlito/Carlito-Bold.ttf"),
        ),
        (
            Path("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"),
            Path("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"),
        ),
        (
            Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
            Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
        ),
        (
            Path("/usr/share/fonts/truetype/ttf-dejavu/DejaVuSans.ttf"),
            Path("/usr/share/fonts/truetype/ttf-dejavu/DejaVuSans-Bold.ttf"),
        ),
        (
            Path("/usr/share/fonts/truetype/freefont/FreeSans.ttf"),
            Path("/usr/share/fonts/truetype/freefont/FreeSansBold.ttf"),
        ),
        (
            Path("/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"),
            Path("/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"),
        ),
    ]
    for regular, bold in candidates:
        if regular.exists():
            pdfmetrics.registerFont(TTFont("ResumeSans", str(regular)))
            bold_path = bold if bold.exists() else regular
            pdfmetrics.registerFont(TTFont("ResumeSans-Bold", str(bold_path)))
            pdfmetrics.registerFontFamily(
                "ResumeSans",
                normal="ResumeSans",
                bold="ResumeSans-Bold",
                italic="ResumeSans",
                boldItalic="ResumeSans-Bold",
            )
            return "ResumeSans", "ResumeSans-Bold"
    pdfmetrics.registerFontFamily(
        "Helvetica",
        normal="Helvetica",
        bold="Helvetica-Bold",
        italic="Helvetica-Oblique",
        boldItalic="Helvetica-BoldOblique",
    )
    return "Helvetica", "Helvetica-Bold"


def build_styles(density: float = 1.0):
    font, font_bold = _register_fonts()
    base = getSampleStyleSheet()
    d = max(0.72, min(1.0, float(density)))

    def fs(px: float) -> float:
        return round(px * d, 2)

    def sp(mm_val: float) -> float:
        return mm_val * d * mm

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
    try:
        from pypdf import PdfReader
        return max(1, len(PdfReader(str(path)).pages))
    except Exception:
        try:
            raw = path.read_bytes()
            return max(1, raw.count(b"/Type /Page") - raw.count(b"/Type /Pages"))
        except Exception:
            return 1


def header_block(styles, data: dict, density: float = 1.0):
    email = data["emails"][0] if data.get("emails") else ""
    phones = " · ".join(data.get("phones") or [])
    location = data.get("location") or ""
    website = (data.get("links") or [""])[0]
    d = max(0.72, min(1.0, float(density)))
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
        note = data["experience_note"]
        style = styles["RNoteBold"] if "RNoteBold" in styles.byName else styles["RBody"]
        story.append(Paragraph(f"<b>{note}</b>", style))
    story.append(Paragraph("Education", styles["RH2"]))
    story.append(section_rule(d))
    for edu in data["education"]:
        story.append(edu_block(styles, edu))
    story.append(Paragraph("Certificates & Awards", styles["RH2"]))
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
    output = output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    meta = load_versions()
    ver = version or meta.get("current") or "1.0.0"
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
    meta = load_versions()
    slug = meta.get("slug") or "Menelik-Admasu-Resume"
    VERSIONS_DIR.mkdir(parents=True, exist_ok=True)
    archived_name = f"{slug}-v{version}.pdf"
    archived_path = VERSIONS_DIR / archived_name
    shutil.copy2(pdf_path, archived_path)
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
    parser.add_argument("-o", "--output", type=Path, default=DEFAULT_OUT, help=f"Output path (default: {DEFAULT_OUT})")
    parser.add_argument("--version", type=str, default=None, help="Explicit semver (e.g. 1.2.0)")
    parser.add_argument("--bump", choices=("patch", "minor", "major"), default=None, help="Bump current version")
    parser.add_argument("--label", type=str, default="", help="Short release label")
    parser.add_argument("--change", action="append", default=[], help="Changelog bullet (repeatable)")
    parser.add_argument("--no-register", action="store_true", help="Only write PDF; do not update version history")
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
