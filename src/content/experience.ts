export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Robotics Software Engineer",
    company: "MapleMind Academy",
    location: "Toronto, ON",
    dates: "Aug 2025 – Feb 2026",
    bullets: [
      "Developed navigation and control algorithms in C++ (Arduino IDE) for 4 autonomous robots, integrating ultrasonic sensors, servo motors, and the MPU-6050 gyroscope; improved turning accuracy by 35% and reduced collision errors by 40%.",
      "Designed sensor fusion logic to stabilize robot movement, increasing path-following consistency by 30% during maze navigation tasks.",
      "Debugged and resolved hardware-software integration issues through iterative on-robot testing, cutting troubleshooting time by 25% compared to initial trials.",
    ],
  },
  {
    title: "Data Engineer Intern",
    company: "PopIn",
    location: "Toronto, ON",
    dates: "Jan 2025 – May 2025",
    bullets: [
      "Built automated Python data pipelines and optimized six MySQL tables, reducing query response times by 40% and data noise by 30%.",
      "Enhanced event-matching accuracy by 25% through algorithmic refinements and weighted logic improvements.",
      "Streamlined development workflows with GitHub version control and agile sprints, boosting deployment speed by 35%.",
    ],
  },
];
