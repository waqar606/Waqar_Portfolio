import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Waqar Ahmed, a passionate Web developer with a keen eye for
          MERN Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Bachelor of Computer Science and Information Technology, NED
          University of Engineering & Technology, 2020–2024,
          <span className="font-bold"> CGPA: 3.3</span>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in JavaScript and Python, experienced with VS Code,
          ReactJs, Redux, Firebase, Tailwind CSS, HTML, CSS, Bootstrap5, and
          Django. Strong grasp of frontend and backend development with
          excellent problem-solving skills and effective communication and
          collaboration abilities.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          Software Engineer Intern, KDA Office, from august 2023 to October 2023
          Assisted in software development projects, contributed to coding and
          debugging, and collaborated with the team to improve system
          performance and functionality during a 2-month internship.
        </span>
        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative Web Developement solutions that exceed client expectations
          and contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
