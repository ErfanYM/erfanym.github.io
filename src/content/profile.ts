export interface Profile {
  name: string;
  title: string;
  tagline: string;
  aboutParagraphs: string[];
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export const profile: Profile = {
  name: "Erfan YousefMoumji",
  title: "Data Engineer",
  tagline: "Engineering distributed data pipelines, from raw ingestion to production-scale analytics.",
  aboutParagraphs: [
    "A recent Computer Science graduate from York University. My interest in data engineering started small: cleaning up messy MySQL tables during an internship at PopIn, and watching query times drop once the pipeline was actually designed well. I was hooked.",
    "Since then I've built distributed pipelines in PySpark, designed medallion architectures on Databricks and SQL Server, and worked through everything from raw ingestion to star-schema models feeding real analytics. What keeps me interested is the problems where correctness actually matters: catching duplicates before they cause a headache, handling schema drift gracefully, building a pipeline that runs the same way at 3am as it does while I'm watching it.",
    "When I'm not building, I'm usually poking around whatever dataset is in front of me, curious how far I can push a pipeline before it breaks.",
  ],
  email: "yosefyerfan1@gmail.com",
  phone: "437-440-6684",
  location: "Toronto, Ontario",
  linkedin: "https://linkedin.com/in/erfan-ym",
  github: "https://github.com/ErfanYM",
};
