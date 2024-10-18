import Contact from "@/components/Contact";
import React from "react";
import { projectDetails } from "../../../constants";
import Services from "@/components/Services";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center bg-slate-400 py-24 md:py-48 mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl text-white mb-3">Business</h1>
      </div>

      {/* Intro Section */}
      <div className="text-center pb-10 md:pb-20 border-b">
        <h2 className="text-xl md:text-3xl mb-3 w-full md:w-2/3 mx-auto">
          Frigate는 당신의 아이디어를 현실로 구현하며,
          <br /> 디지털 세상에서의 무한한 가능성을 함께 열어갑니다.
        </h2>
      </div>

      {/* Project Details Section */}
      <ol className="list-decimal w-full md:w-2/3 mx-auto py-5 px-4 md:px-0">
        {projectDetails.map((project) => (
          <li className="mb-10" key={project.title}>
            <h3 className="text-lg font-bold mb-1">{project.title}</h3>
            {project.details.map((detail) => (
              <p key={detail.title}>
                <strong>- {detail.title}:</strong>
                <span>{detail.description}</span>
              </p>
            ))}
          </li>
        ))}
      </ol>

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default About;
