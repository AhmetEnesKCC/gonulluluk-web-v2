import { ProjectDetailType } from "@/types/model";
import React from "react";

const ProjectBookPart = (props: { project: ProjectDetailType }) => {
  return (
    <div className="px-6 py-12 flex flex-col items-center">
      <h3 className="text-[32px] font-bold text-primary">
        {props.project.name}
      </h3>
      <p className="text-[20px]">{props.project.description}</p>
    </div>
  );
};

export default ProjectBookPart;
