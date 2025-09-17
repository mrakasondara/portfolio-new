import ExperienceItem from "./ExperienceItem";
const Experiences = () => {
  let index = 0;
  const items = [
    {
      date: "Feb 2024 - Jun 2024",
      role: "Cohort - SIB Dicoding Cycle 6",
      desc: "SIB Dicoding Cycle 6 is part of the Certified Independent Study (SIB)program organized by Dicoding Indonesia within the framework of Kampus Merdeka. This program is designed to provide practical and in-depth learning experiences in the field of digital technology to Indonesian students. Some skills and experience gained in this program : - HTML, CSS, dan JavaScript - Asynchronous JavaScript - Webpack - Progressive Web Apps (PWA) - Deployment - RESTful API - Time management and teamwork",
      flow: "start",
    },
    {
      date: "Feb 2025 - Jul 2025",
      role: "Mentor - DBS Coding Camp Front-End & Backend",
      desc: "DBS Coding Camp Program is a collaborative program between the DBS Foundation and Dicoding that has been running since 2022. In this  program I have several tasks, for example like Lead and assist a cohort of student between February - July 2025 in a class from Front-End & Back-End Learning Pathm, and Collaboration with mentors and other contributors",
      flow: "end",
    },
    {
      date: "Dec 2024 - Present",
      role: "External Code Reviewer",
      desc: "The external code reviewer role is one of the contributions to the Dicoding Elite program. In this position, my primary responsibility is to review, ensure, and provide feedback on student submissions or final projects that meet established requirements.",
      flow: "start",
    },
  ];
  return (
    <div className="my-[3rem] md:w-[90%] lg:w-1/2 my-[2rem] md:mx-auto p-5 overflow-none">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {items.map((item) => (
          <ExperienceItem {...item} key={index++} />
        ))}
      </ul>
    </div>
  );
};

export default Experiences;
