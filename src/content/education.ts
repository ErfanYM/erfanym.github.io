export interface Education {
  school: string;
  location: string;
  degree: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    school: "York University",
    location: "Toronto, ON",
    degree: "Honours Bachelor of Science in Computer Science",
    coursework: [
      "Data Mining",
      "Machine Learning",
      "Information Networks (NetworkX)",
      "Introduction to Database Systems (SQL)",
      "Big Data Systems",
      "Computer Vision",
    ],
  },
];
