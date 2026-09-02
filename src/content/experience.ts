import type { WorkEntry } from "./types";

export const experience: WorkEntry[] = [
  {
    id: "maplemind",
    title: "Software Engineer",
    subtitle: "MapleMind Academy",
    span: "AUG 2025 — FEB 2026",
    stack: ["C++", "Arduino", "Python", "Robotics"],
    summary: "Permanent, full-time · Toronto, Ontario · On-site",
    bullets: [
      "Developed navigation and control algorithms in C++ for 4 autonomous robots integrating ultrasonic sensors, servo motors, and the MPU-6050 gyroscope — improving turning accuracy by 35% and reducing collision errors by 40%.",
      "Designed sensor fusion logic to stabilize robot movement, increasing path-following consistency by 30% during maze navigation.",
      "Built robotics competition training pipelines for RoboCup, VEX, and FIRA, mentoring student teams through hardware-software integration and algorithm design.",
      "Deployed in-class robotics labs in partnership with schools, standardizing hardware setups and training instructors on embedded systems programming.",
    ],
  },
  {
    id: "popin",
    title: "Data Engineer Intern",
    subtitle: "PopIn",
    span: "JAN 2025 — APR 2025",
    stack: ["Python", "MySQL", "PySpark", "Data Modeling"],
    summary: "Internship · Toronto, Ontario · Remote",
    bullets: [
      "Designed and optimized a relational data model across six MySQL tables, reducing query latency by 40% and improving scalability of production user data retrieval systems.",
      "Built a Python-based data extraction and filtration engine using Pandas and NumPy, cutting irrelevant noise by 30% and improving dataset quality for downstream event tracking analytics.",
      "Engineered a multi-pass event-matching algorithm with iterative weighted logic refinements, boosting match accuracy by 25% and enabling deeper user engagement insights.",
      "Managed version control and CI coordination via GitHub across agile sprints, improving deployment speed by 35%.",
    ],
  },
  {
    id: "tjx",
    title: "Customer Service Representative",
    subtitle: "TJX Canada",
    span: "SEP 2020 — JAN 2025",
    stack: [],
    summary: "Contract, part-time · North York, Ontario",
    bullets: [
      "Monitored department inventory levels and stock movement on the sales floor, identifying product mix gaps and slow-moving merchandise; trained 5+ associates on merchandising standards, driving a 20% improvement in loyalty program participation.",
      "Analyzed daily sales floor data and inventory-to-sales ratios to flag variances and underperforming categories, escalating findings with actionable recommendations to management.",
      "Recognized as Employee of the Month (2021 & 2022) for consistent operational excellence and cross-functional collaboration with TJX management.",
    ],
  },
  {
    id: "applied-ai",
    title: "Software Engineer",
    subtitle: "Applied-AI",
    span: "JAN 2024 — MAY 2024",
    stack: ["JavaScript", "Java", "Bitbucket", "Agile"],
    summary: "Internship · Toronto, Ontario · Remote",
    bullets: [
      "Led the maintenance and improvement of both front-end and back-end systems to deliver strong performance and scalability.",
      "Developed and deployed responsive web design strategies, significantly enhancing mobile user experience — a 40% increase in mobile traffic and a 25% uplift in conversion rates.",
      "Collaborated with a distributed team of 5 developers using JIRA for project management, contributing to efficient task coordination and project milestones.",
    ],
  },
  {
    id: "kavosh",
    title: "Junior Software Engineer",
    subtitle: "Kavosh Robotics Team",
    span: "JAN 2017 — DEC 2018",
    stack: ["C", "C++", "SolidWorks", "Altium Designer"],
    summary: "Internship · Tehran Province, Iran · On-site",
    bullets: [
      "Programmed robotic systems in C and C++ for a junior rescue robotics team, winning world championships in Nagoya, Japan (2017) and Montreal, Canada (2018).",
    ],
  },
];
