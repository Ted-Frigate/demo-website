import Contact from "@/components/Contact";
import React from "react";
import { projectDetails } from "../../../constants";
import Services from "@/components/Services";

const About = () => {
  return (
    <div>
      <div className="text-center bg-slate-400 py-48 mb-20">
        <h1 className="text-5xl text-white mb-3">Business</h1>
      </div>

      <div className="text-center pb-20 border-b">
        <h2 className="text-3xl mb-3 w-2/3 mx-auto">
          Frigate는 당신의 아이디어를 현실로 구현하며,
          <br /> 디지털 세상에서의 무한한 가능성을 함께 열어갑니다.
        </h2>
      </div>
      <ol className="list-decimal w-2/3 mx-auto py-5">
        {projectDetails.map((project) => (
          <li className="mb-10" key={project.title}>
            <h3 className="text-lg font-bold mb-1">{project.title}</h3>
            {project.details.map((detail) => (
              <p key={detail.title}>
                <strong>-{detail.title}:</strong>
                <span>{detail.description}</span>
              </p>
            ))}
          </li>
        ))}
      </ol>
      <Services />
      <Contact />
    </div>
  );
};

export default About;
