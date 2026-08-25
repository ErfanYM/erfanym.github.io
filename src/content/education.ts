export interface Education {
  school: string;
  location: string;
  degree: string;
  dates: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    school: "Lassonde School of Engineering, York University",
    location: "Toronto, Ontario",
    degree: "Honours Bachelor of Science, Specialized Honours Computer Science",
    dates: "Sep 2021 – May 2026",
    coursework: [
      "Data Mining",
      "Machine Learning",
      "Information Networks (NetworkX)",
      "Introduction to Database Systems (SQL)",
      "Big Data Systems",
      "Computer Vision",
    ],
  },
  {
    school: "Columbia International College",
    location: "Hamilton, Ontario",
    degree: "Grade 12, Computer Science",
    dates: "2019",
    coursework: [],
  },
];
