import type { WorkEntry } from "./types";

export const projects: WorkEntry[] = [
  {
    id: "databricks-medallion",
    title: "Databricks Medallion Data Platform",
    subtitle: "Data Engineering",
    span: null,
    stack: ["AWS", "Databricks", "PySpark", "Delta Lake", "Unity Catalog"],
    summary:
      "Three-layer bronze/silver/gold lakehouse on Databricks with Unity Catalog governance, config-driven PySpark ingestion, and Spark SQL star-schema modeling.",
    bullets: [
      "Config-driven PySpark ingestion loop loading 6 CRM/ERP sources into governed Delta tables via Unity Catalog.",
      "Silver-layer transformations across 6 tables: schema-wide trimming, categorical normalization, null-key filtering.",
      "Gold-layer Star Schema with ROW_NUMBER() surrogate keys, chained into Databricks Jobs orchestration.",
    ],
    link: { href: "https://github.com/ErfanYM", label: "Source" },
  },
  {
    id: "sql-warehouse",
    title: "SQL Data Warehouse & Analytics Platform",
    subtitle: "Data Engineering",
    span: null,
    stack: ["SQL Server", "T-SQL", "ETL", "Star Schema", "SSMS"],
    summary:
      "Three-tier Medallion data warehouse on SQL Server ingesting ~97K records, with a 12-rule Silver ETL layer and a Gold-layer star schema over a $29M+ revenue dataset.",
    bullets: [
      "Three-tier Medallion warehouse ingesting ~97K records via BULK INSERT with TRY/CATCH error handling.",
      "12 T-SQL transformation rules: deduplication with ROW_NUMBER(), CASE-based normalization, LEAD() temporal features.",
      "Gold-layer Star Schema over 60K+ transactions with surrogate keys and source-priority conflict resolution.",
    ],
    link: { href: "https://github.com/ErfanYM", label: "Source" },
  },
  {
    id: "amazon-link-prediction",
    title: "Amazon Co-Purchase Link Prediction",
    subtitle: "Data Science & ML",
    span: null,
    stack: ["Python", "NetworkX", "Pandas", "NumPy", "Scikit-learn"],
    summary:
      "Temporal link prediction pipeline over 300K Amazon reviews with leakage-free splitting, benchmarking 4 classical graph algorithms across warm/cold-start scenarios.",
    bullets: [
      "Leakage-free train/test splitting at the 80th-percentile timestamp to prevent future-edge contamination.",
      "Scalable 2-hop candidate generation, benchmarking 4 classical graph algorithms under warm-start vs. cold-start scenarios.",
      "Validated reproducibility across 5 random seeds, reporting 6 ranking metrics to establish rigorous baselines.",
    ],
    link: { href: "https://github.com/ErfanYM", label: "Source" },
  },
  {
    id: "auction-platform",
    title: "Auction E-Commerce Platform",
    subtitle: "Distributed Systems",
    span: null,
    stack: ["Java", "Spring Boot", "gRPC", "PostgreSQL", "Docker"],
    summary:
      "Microservices auction system with 6 gRPC services, a Spring Boot API gateway, JWT auth, and a LangGraph AI support agent with text-to-SQL over Postgres.",
    bullets: [
      "Architected 6 independent gRPC microservices with a per-service DTO/mapper layer decoupling the REST contract from protobuf schemas.",
      "Engineered an API Gateway with JWT authentication, authorization guards, and OpenAPI docs for 15+ REST endpoints.",
      "Built a LangGraph AI support agent with text-to-SQL over two Postgres databases, instrumented with OpenTelemetry tracing.",
    ],
    link: { href: "https://github.com/ErfanYM", label: "Source" },
  },
  {
    id: "coverage-framework",
    title: "Coverage-Driven Test Automation Framework",
    subtitle: "Software Testing",
    span: null,
    stack: ["Java", "Maven", "JUnit 4", "JaCoCo", "PIT"],
    summary:
      "Test automation framework for a 56-class Java codebase, raising statement coverage on 27 under-tested classes from 0–12% to 98–100%.",
    bullets: [
      "Raised coverage on 27 under-tested classes from 0–12% to 98–100% with LLM-assisted, manually validated unit tests.",
      "Transformed high-risk bugs in recursive and condition-heavy code into reproducible regression tests.",
      "Used PIT, SpotBugs, and coverage analysis to assess quality beyond standard unit testing.",
    ],
    link: { href: "https://github.com/ErfanYM", label: "Source" },
  },
  {
    id: "turbo-detailing",
    title: "Turbo Detailing Booking API & Square Integration",
    subtitle: "Full-Stack",
    span: null,
    stack: ["Next.js", "TypeScript", "Square API", "Node.js"],
    summary:
      "Production scheduling pipeline for a live mobile detailing business: Square Appointments integration with idempotency-keyed dedup and HMAC-verified webhooks.",
    bullets: [
      "Square Appointments integration with idempotency-keyed deduplication and server-side conflict validation.",
      "HMAC-SHA256 webhook signature verification with replay deduplication for authenticated event processing.",
      "Next.js API routes with service-area validation, dynamic pricing logic, and real-time availability checks.",
    ],
    link: { href: "https://github.com/ErfanYM", label: "Source" },
  },
];
