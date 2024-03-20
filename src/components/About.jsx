
import React from "react";
import aboutImg from "../assets/images/about.png";

const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex flex-col md:flex-row items-center md:gap-6 gap-12 px-4 md:px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 md:w-11/12 mx-auto">
                Hello there! I'm Faustina Onoriode, a passionate frontend developer with a unique background in biochemistry. My journey into the world of web development began when I decided to combine my love for science with my growing fascination for technology. It was an unexpected transition, but one that has brought immense fulfillment and excitement to my professional life.

                Driven by this newfound passion, I decided to dive headfirst into the world of frontend development. I enrolled in coding bootcamps and online courses to gain a solid foundation in HTML, CSS, and JavaScript. Since then, I have been on an exhilarating journey of continuous learning and growth, expanding my skill set to include modern frameworks like React and Angular.

                My background in biochemistry has equipped me with a unique perspective as a developer. I bring a scientific approach to problem-solving, meticulously analyzing requirements and designing efficient solutions. I have honed my ability to break down complex concepts into manageable parts, allowing me to deliver clean, intuitive, and user-friendly interfaces.

                Outside of coding, you can find me indulging in my other passions, such as exploring the outdoors, experimenting in the kitchen, or losing myself in a captivating book. These interests help me maintain a well-rounded perspective, fueling my creativity and keeping me motivated to approach each project with fresh eyes and innovative ideas.
              </p>
              <br />
              <br />
              <a href="./src/assets/faustina Onoriode Portfolio 1011.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="md:w-96 w-full relative sm:w-10/12 max-w-sm">
              <img
                src={aboutImg}
                alt=""
                className="w-full h-auto object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;