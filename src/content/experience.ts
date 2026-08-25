export interface ExperienceEntry {
  title: string;
  company: string;
  employmentType: string;
  location: string;
  dates: string;
  color: string;
  techStack: string[];
  achievements: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Software Engineer",
    company: "MapleMind Academy",
    employmentType: "Permanent, Full-time",
    color: "#A9501F",
    location: "Toronto, Ontario, Canada · On-site",
    dates: "Aug 2025 – Feb 2026",
    techStack: ["Robotics", "Arduino", "C++", "Python"],
    achievements: [
      "Developed navigation and control algorithms in C++ for 4 autonomous robots integrating ultrasonic sensors, servo motors, and the MPU-6050 gyroscope — improving turning accuracy by 35% and reducing collision errors by 40%.",
      "Designed sensor fusion logic to stabilize robot movement, increasing path-following consistency by 30% during maze navigation.",
      "Built robotics competition training pipelines for RoboCup, VEX, and FIRA, mentoring student teams through hardware-software integration and algorithm design.",
      "Deployed in-class robotics labs in partnership with schools, standardizing hardware setups and training instructors on embedded systems programming.",
    ],
  },
  {
    title: "Data Engineer Intern",
    company: "PopIn",
    employmentType: "Internship",
    color: "#B8860B",
    location: "Toronto, Ontario, Canada · Remote",
    dates: "Jan 2025 – Apr 2025",
    techStack: ["Python", "MySQL", "PySpark", "Data Modeling"],
    achievements: [
      "Designed and optimized a relational data model across six MySQL tables, reducing query latency by 40% and improving scalability of production user data retrieval systems.",
      "Built a Python-based data extraction and filtration engine using Pandas and NumPy, cutting irrelevant noise by 30% and improving dataset quality for downstream event tracking analytics.",
      "Engineered a multi-pass event-matching algorithm with iterative weighted logic refinements, boosting match accuracy by 25% and enabling deeper user engagement insights.",
      "Managed version control and CI coordination via GitHub across agile sprints, improving deployment speed by 35%.",
    ],
  },
  {
    title: "Customer Service Representative",
    company: "TJX Canada ",
    employmentType: "Contract, Part-time",
    color: "#6B7F5E",
    location: "North York, Ontario, Canada",
    dates: "Sep 2020 – Jan 2025",
    techStack: [],
    achievements: [
      "Monitored department inventory levels and stock movement on the sales floor, identifying product mix gaps and slow-moving merchandise; trained 5+ associates on merchandising standards, driving a 20% improvement in loyalty program participation.",
      "Analyzed daily sales floor data and inventory-to-sales ratios to flag variances and underperforming categories, escalating findings with actionable recommendations to management.",
      "Recognized as Employee of the Month (2021 & 2022) for consistent operational excellence and cross-functional collaboration with TJX management.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Applied-AI",
    employmentType: "Internship",
    color: "#9C5B6B",
    location: "Toronto, Ontario, Canada · Remote",
    dates: "Jan 2024 – May 2024",
    techStack: ["JavaScript", "Java", "Bitbucket", "Agile", "JIRA", "API", "HTML", "CSS"],
    achievements: [
      "Led the maintenance and improvement of both front-end and back-end systems to deliver strong performance and scalability.",
      "Developed and deployed responsive web design strategies, significantly enhancing mobile user experience — a 40% increase in mobile traffic and a 25% uplift in conversion rates.",
      "Collaborated with a distributed team of 5 developers using JIRA for project management, contributing to efficient task coordination and project milestones.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Kavosh Robotics Team",
    employmentType: "Internship",
    color: "#7A5230",
    location: "Tehran Province, Iran · On-site",
    dates: "Jan 2017 – Dec 2018",
    techStack: ["SolidWorks", "Altium Designer", "C", "C++"],
    achievements: [
      "Programmed robotic systems in C and C++ for a junior rescue robotics team, winning world championships in Nagoya, Japan (2017) and Montreal, Canada (2018).",
    ],
  },
];
