export interface Project {
  title: string;
  summary: string;
  tech: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Auction E-Commerce Platform",
    summary:
      "Microservices auction system with 6 gRPC services, a Spring Boot API gateway, JWT auth, and a LangGraph AI support agent with text-to-SQL over Postgres.",
    tech: ["Java", "Spring Boot", "Python", "React", "gRPC", "PostgreSQL", "Docker"],
    github: "https://github.com/ErfanYM",
  },
  {
    title: "Amazon Co-Purchase Link Prediction",
    summary:
      "Temporal link prediction pipeline over 300K Amazon reviews with leakage-free splitting, benchmarking 4 classical graph algorithms across warm/cold-start scenarios.",
    tech: ["Python", "NetworkX", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/ErfanYM",
  },
  {
    title: "Databricks Medallion Data Platform",
    summary:
      "Three-layer bronze/silver/gold lakehouse on Databricks with Unity Catalog governance, config-driven PySpark ingestion, and Spark SQL star-schema modeling.",
    tech: ["AWS", "Databricks", "PySpark", "Delta Lake", "Unity Catalog"],
    github: "https://github.com/ErfanYM",
  },
  {
    title: "SQL Data Warehouse & Analytics Platform",
    summary:
      "Three-tier Medallion data warehouse on SQL Server ingesting ~97K records, with a 12-rule Silver ETL layer and a Gold-layer star schema over a $29M+ revenue dataset.",
    tech: ["SQL Server", "T-SQL", "ETL", "Star Schema", "SSMS"],
    github: "https://github.com/ErfanYM",
  },
  {
    title: "Coverage-Driven Test Automation Framework",
    summary:
      "Test automation framework for a 56-class Java codebase, raising statement coverage on 27 under-tested classes from 0–12% to 98–100%.",
    tech: ["Java", "Maven", "JUnit 4", "JaCoCo", "SpotBugs", "PIT"],
    github: "https://github.com/ErfanYM",
  },
  {
    title: "Turbo Detailing Booking API & Square Integration",
    summary:
      "Production scheduling pipeline for a live mobile detailing business: Square Appointments integration with idempotency-keyed dedup and HMAC-verified webhooks.",
    tech: ["Next.js", "TypeScript", "Square API", "Node.js", "Resend"],
    github: "https://github.com/ErfanYM",
  },
];
