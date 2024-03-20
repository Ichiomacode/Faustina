import React from "react";
import aboutImg from "../assets/images/hero.jpg";

const Hireme = () => {
  const emailLink = "mailto:ichiomafaustina@gmail.com";

  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            If you're looking for a skilled and dedicated frontend developer,
            I'm here to help! With expertise in HTML, CSS, and JavaScript, along
            with experience in frontend frameworks like React and Angular, I can
            create stunning and interactive web applications that exceed your
            expectations. I pay attention to detail and strive for pixel-perfect
            designs. Let's collaborate to bring your ideas to life and deliver
            an outstanding user experience.
          </p>
          <a href={emailLink}>
            <button className="btn-primary mt-10">Say Hello</button>
          </a>
        </div>
        <div className="lg:w-48 lg:h-48 w-32 h-32 rounded-full overflow-hidden">
          <img
            src={aboutImg}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hireme;
