import CustomTitle from "@/components/CustomTitle";
import React from "react";
import { teamProjects } from "../../../constants";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";

const Projects = () => {
  return (
    <div>
      <div className="text-center bg-slate-400 py-48 mb-20">
        <h1 className="text-5xl text-white mb-3">Our work</h1>
      </div>

      <CustomTitle title="Our work" subtitle="Team Projects" />

      <ul>
        {teamProjects.map((project) => (
          <li className="flex flex-col items-center gap-4 mb-20" key={project.id}>
            <Link href={`/work/${project.id}`}>
              <Image
                src={project.image}
                alt={project.name}
                className="bg-gray-100"
                width={1280}
                height={450}
              />
            </Link>
            <h3 className="text-xl">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
          </li>
        ))}
      </ul>

      <Contact />
    </div>
  );
};

export default Projects;
