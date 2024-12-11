import { ProjectDetailType } from "@/types/model";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ProjectToggle = (props: {
  project: Pick<ProjectDetailType, "id" | "logo" | "name">;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx("p-5", props.selected && "bg-[#F8F8F8] rounded-l-[32px]")}
    >
      <div className="w-[64px] aspect-square relative">
        <Image
          src={props.project.logo}
          layout="fill"
          objectFit="contain"
          alt={props.project.name}
        />
      </div>
    </button>
  );
};

export default ProjectToggle;
