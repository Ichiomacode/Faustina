import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Tina's kitchen",
      github_link: "https://github.com/Ichiomacode/tina-kitchen",
      live_link: "https://clinquant-cobbler-6f94cc.netlify.app/",
    },
    {
      img: project2,
      name: "movie app",
      github_link: "https://github.com/Ichiomacode/profile-search-app",
      live_link: "https://search-react-tina.netlify.app/",
    },
    {
      img: project3,
      name: "Mealy",
      github_link: "https://github.com/Stutern-Project-23/Group-4-Mealy-Project-Team-2B",
      live_link: "https://64a9621901213a7f6d786959--sweet-sherbet-b3e0da.netlify.app/",
    },
    {
      img: project4,
      name: "Theme profile card",
      github_link: "https://github.com/Ichiomacode/my-profile-card",
      live_link: "https://tinaprofilecard.netlify.app/",
    },
    {
      img: project5,
      name: "To-do-list",
      github_link: "https://github.com/Ichiomacode/tina-s-to_do-list",
      live_link: "https://tinastodolist.netlify.app/",
    },
    {
      img: project6,
      name: "Neomorphism login page",
      github_link: "https://github.com/Ichiomacode/neomorphism-login-page",
      live_link: "https://silver-panda-92488e.netlify.app/",
    },
  ];
  
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex justify-center max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
              className: "my-swiper-pagination", // Added custom class
            }}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-lg w-full h-60 object-cover"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
