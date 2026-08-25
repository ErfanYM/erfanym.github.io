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
    "I'm Erfan, a recent Computer Science graduate from York University. My interest in data started small: cleaning up messy MySQL tables during a data engineering internship at PopIn, watching query times drop and realizing how much a well-designed pipeline changes what a team can actually do with its data.",
    "Since then I've kept chasing that feeling. I've built distributed pipelines in PySpark, designed a medallion architecture on Databricks and SQL Server, and worked through everything from raw ingestion to star-schema models feeding real analytics. Along the way I also built things that had nothing to do with data on paper but taught me the same lesson: robots that navigate a maze on sensor fusion, a microservices auction platform with six independent services talking over gRPC. Different domains, same core question. How do you make a system reliable when the input is messy and the stakes are real.",
    "Right now I'm focused on data engineering. I like the problems where correctness actually matters: deduplication, schema drift, a pipeline that has to run the same way at 3am as it does when I'm watching it. Outside of build, I'm usually digging into whatever dataset is in front of me or seeing how far I can push a system before it breaks.",
  ],
  email: "yosefyerfan1@gmail.com",
  phone: "437-440-6684",
  location: "Toronto, Ontario",
  linkedin: "https://linkedin.com/in/erfan-ym",
  github: "https://github.com/ErfanYM",
};
