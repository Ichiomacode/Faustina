import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
    },
    {
      logo: "logo-css3",
    },
    {
      logo: "logo-nodejs",
    },
    {
      logo: "logo-react",
    },
    {
      logo: "logo-netlify",
      link: "https://www.netlify.com/", // Add the Netlify link
    },
    {
      logo: "logo-github",
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Soft skills</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative w-32 h-32 flex items-center justify-center rounded-full"
            >
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <div className="text-6xl bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo === "logo-netlify" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-16 h-16"
                    >
                      <path d="M16 2 L2 16 L16 30 L30 16 Z"></path>
                      <path d="M2 16 L16 16"></path>
                      <path d="M16 2 L16 30"></path>
                    </svg>
                  ) : skill.logo === "logo-github" ? (
                    <ion-icon name="logo-github" />
                  ) : (
                    <ion-icon name={skill.logo} />
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
