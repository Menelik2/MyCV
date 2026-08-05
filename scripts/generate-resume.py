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
import os
import sys
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
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

# --- Brand / layout ---
ACCENT = HexColor("#1e40af")
MUTED = HexColor("#475569")
DARK = HexColor("#0f172a")
RULE = HexColor("#cbd5e1")

PAGE = A4
MARGIN = 15 * mm

# --- Content (single source of truth for the PDF) ---
RESUME = {
    "name": "Menelik Admasu",
    "tagline": "Full-Stack App Developer · BSc Computer Science · Computer Administrator",
    "location": "Addis Ababa, Ethiopia",
    "education_line": "Bahir Dar University (2022 – 2026, completed)",
    "emails": ["linuxos777@gmail.com"],
    "phones": ["+251 918 006 053", "+251 977 832 379"],
    "links": ["github.com/Menelik2", "menelikcv.vercel.app"],
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
        ("Yeni Movie", "yeni-movie.vercel.app", "Movie &amp; TV discovery web app"),
        ("Yeni Typing Learning", "yenityping.vercel.app", "Typing tutor (WPM &amp; accuracy)"),
        ("Yeni Exam", "yeniexams.vercel.app", "Exit exam practice generator"),
        ("Windows XP Portfolio", "menelikcv.vercel.app", "Interactive OS-style portfolio"),
    ],
    "volunteer": "Technology training for the community and organizations.",
    "languages": (
        "English — Professional working proficiency · "
        "Amharic — Professional working proficiency"
    ),
}


def build_styles():
    base = getSampleStyleSheet()
    specs = {
        "RName": dict(fontName="Helvetica-Bold", fontSize=20, textColor=DARK, spaceAfter=1.5 * mm, leading=24),
        "RTag": dict(fontName="Helvetica", fontSize=9.5, textColor=ACCENT, spaceAfter=1 * mm, leading=12),
        "RContact": dict(fontName="Helvetica", fontSize=8.2, textColor=MUTED, spaceAfter=2.5 * mm, leading=11),
        "RH2": dict(
            fontName="Helvetica-Bold",
            fontSize=10.5,
            textColor=ACCENT,
            spaceBefore=3 * mm,
            spaceAfter=1.2 * mm,
            leading=13,
        ),
        "RBody": dict(fontName="Helvetica", fontSize=9, textColor=DARK, leading=11.5, spaceAfter=1.2 * mm),
        "RJob": dict(fontName="Helvetica-Bold", fontSize=9.5, textColor=DARK, leading=12, spaceBefore=1.2 * mm),
        "RMeta": dict(fontName="Helvetica-Oblique", fontSize=8, textColor=MUTED, leading=10, spaceAfter=0.6 * mm),
        "RBullet": dict(fontName="Helvetica", fontSize=8.5, textColor=DARK, leading=11, leftIndent=8),
    }
    for name, kw in specs.items():
        if name not in base.byName:
            base.add(ParagraphStyle(name=name, **kw))
    return base


def section_rule():
    return HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=0.5 * mm, spaceAfter=1 * mm)


def header_block(styles, data: dict):
    # Under the name: tagline + contact only (no university line / no minilover email)
    contact_bits = (
        " · ".join(data["emails"] + data["phones"])
        + "<br/>"
        + " · ".join(data["links"])
    )
    return [
        Paragraph(data["name"], styles["RName"]),
        Paragraph(data["tagline"], styles["RTag"]),
        Paragraph(contact_bits, styles["RContact"]),
        HRFlowable(width="100%", thickness=1.4, color=ACCENT, spaceAfter=2 * mm),
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


def build_story(styles, data: dict):
    story = []
    story.extend(header_block(styles, data))

    story.append(Paragraph("Professional Summary", styles["RH2"]))
    story.append(section_rule())
    story.append(Paragraph(data["summary"], styles["RBody"]))

    story.append(Paragraph("Work Experience", styles["RH2"]))
    story.append(section_rule())
    for job in data["experience"]:
        story.append(job_block(styles, job))
    if data.get("experience_note"):
        story.append(Spacer(1, 1 * mm))
        story.append(Paragraph(f"<b>{data['experience_note']}</b>", styles["RBody"]))

    story.append(Paragraph("Education", styles["RH2"]))
    story.append(section_rule())
    for edu in data["education"]:
        story.append(edu_block(styles, edu))

    story.append(Paragraph("Certificates &amp; Awards", styles["RH2"]))
    story.append(section_rule())
    for c in data["certs"]:
        story.append(Paragraph(f"• {c}", styles["RBullet"]))

    story.append(Paragraph("Skills", styles["RH2"]))
    story.append(section_rule())
    for line in data["skills"]:
        story.append(Paragraph(line, styles["RBody"]))

    story.append(Paragraph("Selected Projects", styles["RH2"]))
    story.append(section_rule())
    for name, url, desc in data["projects"]:
        story.append(Paragraph(f"• <b>{name}</b> — {url} — {desc}", styles["RBullet"]))

    story.append(Paragraph("Volunteer · Languages", styles["RH2"]))
    story.append(section_rule())
    story.append(
        Paragraph(
            f"Volunteer: {data['volunteer']}<br/>Languages: {data['languages']}",
            styles["RBody"],
        )
    )
    return story


def generate(output: Path) -> Path:
    output = output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(output),
        pagesize=PAGE,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=MARGIN,
        bottomMargin=MARGIN,
        title="Menelik Admasu — Resume",
        author="Menelik Admasu",
        subject="Full-Stack App Developer Resume",
    )
    doc.build(build_story(styles, RESUME))
    return output


def main(argv=None):
    parser = argparse.ArgumentParser(description="Generate portfolio resume PDF")
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=DEFAULT_OUT,
        help=f"Output path (default: {DEFAULT_OUT})",
    )
    args = parser.parse_args(argv)
    path = generate(args.output)
    size = path.stat().st_size
    print(f"Wrote {path} ({size:,} bytes)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
