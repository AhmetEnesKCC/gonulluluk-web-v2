"use client";

import { ProjectDetailType } from "@/types/model";
import React, { useState } from "react";
import ProjectToggle from "./project-toggle";
import ProjectBookPart from "./project-book-part";
import { useSearchParams } from "next/navigation";

const ProjectBook = (props: { projects: ProjectDetailType[] }) => {
  const params = useSearchParams();

  const [selectedProject, setSelectedProject] = useState<
    ProjectDetailType["id"] | null
  >(
    (params.get("project") ? Number(params.get("project")) : null) ||
      props.projects[0].id
  );

  // make it memo
  const selectedProjectData = React.useMemo(
    () => props.projects.find((p) => p.id === selectedProject),
    [selectedProject, props.projects]
  );

  return (
    <div
      id="project-book"
      className=" mx-page-padding my-8 grid grid-cols-[auto,1fr]"
    >
      <div className="flex flex-col bg-[#E6E6E6]  rounded-tl-[32px] rounded-bl-[32px]   w-max">
        {props.projects.map((project) => (
          <ProjectToggle
            onClick={() => setSelectedProject(project.id)}
            key={project.id}
            selected={project.id === selectedProject}
            project={project}
          />
        ))}
      </div>
      <div className="bg-[#F8F8F8]">
        {selectedProjectData && (
          <ProjectBookPart project={selectedProjectData} />
        )}
      </div>
    </div>
  );
};

export default ProjectBook;
