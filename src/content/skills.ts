import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Data & Cloud",
    items: [
      { name: "PySpark" },
      { name: "Databricks" },
      { name: "Delta Lake" },
      { name: "Unity Catalog" },
      { name: "SQL Server / T-SQL" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Star Schema / ETL" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "AWS" },
      { name: "Google Cloud Platform" },
      { name: "Kafka", familiar: true },
      { name: "MongoDB", familiar: true },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "Python" },
      { name: "SQL" },
      { name: "Java" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "C++" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Spring Boot" },
      { name: "React" },
      { name: "Next.js" },
      { name: "gRPC" },
      { name: "Scikit-learn" },
      { name: "NetworkX" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Docker" },
      { name: "Git / GitHub" },
      { name: "Maven" },
      { name: "JUnit / JaCoCo" },
      { name: "Kubernetes", familiar: true },
      { name: "GitHub Actions", familiar: true },
      { name: "Linux", familiar: true },
      { name: "Jira / Confluence", familiar: true },
      { name: "Selenium / qTest", familiar: true },
    ],
  },
];
