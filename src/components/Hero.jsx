import React from "react";
import hero from "../assets/images/real-hero.jpg";

const Hero = () => {
  const social_media = [
    {
      name: "logo-instagram",
      link: "https://instagram.com/faustina_ichioma?igshid=NGExMmI2YTkyZg==",
    },
    {
      name: "logo-facebook",
      link: "https://www.facebook.com/onoriodefaustina.ichioma.3",
    },
    {
      name: "logo-linkedin",
      link: "https://www.linkedin.com/in/faustina-onoriode-2939b71b6",
    },
    { name: "logo-twitter", link: "https://twitter.com/ichiomafaustina" },
    { name: "logo-github", link: "https://github.com/Ichiomacode" }, // Added GitHub icon and its link
  ];

  const emailLink = "mailto:ichiomafaustina@gmail.com";

  return (
    <section id="home" className="min-h-screen flex py-8 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-2/3 md:max-w-md h-auto rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Faustina Onoriode</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Software Developer
          </h4>
          <a href={emailLink}>
            <button className="btn-primary mt-6">Contact Me</button>
          </a>
          <div className="mt-6 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-gray-600 hover:text-white cursor-pointer">
                  <ion-icon name={icon.name}></ion-icon>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
