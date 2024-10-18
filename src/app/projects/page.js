import CustomTitle from "@/components/CustomTitle";
import React from "react";
import { teamProjects } from "../../../constants";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";

const Projects = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center bg-slate-400 py-24 md:py-48 mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl text-white mb-3">Our work</h1>
      </div>

      {/* Title Section */}
      <CustomTitle title="Our work" subtitle="Team Projects" />

      {/* Projects Grid */}
      <ul className="grid grid-cols-1 gap-8 px-4 md:px-0 mb-16">
        {teamProjects.map((project) => (
          <li className="flex flex-col items-center gap-4 mb-10 md:mb-20" key={project.id}>
            <Link href={`/work/${project.id}`}>
              <Image
                src={project.image}
                alt={project.name}
                className="bg-gray-100"
                width={1280}
                height={450}
              />
            </Link>
            <h3 className="text-lg md:text-xl">{project.name}</h3>
            <p className="text-gray-400 text-center md:text-left">{project.description}</p>
          </li>
        ))}
      </ul>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Projects;
