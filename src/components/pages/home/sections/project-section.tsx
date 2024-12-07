import { ProjectType } from "@/types/model";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const MissionSection = ({
  projectData,
  odd,
}: {
  projectData: ProjectType;
  odd: boolean;
}) => {
  return (
    <div className={clsx(odd ? "pl-page-padding" : "pr-page-padding")}>
      <div
        className={clsx(
          odd
            ? "rounded-l-full flex-row pr-page-padding"
            : "rounded-r-full flex-row-reverse pl-page-padding",
          "bg-primary   bg-opacity-10 min-h-[360px] pl-[120px] pr-[32px] items-center py-6 flex  gap-x-[64px]"
        )}
      >
        <div className="flex-1  self-stretch flex flex-col py-[32px] justify-center gap-y-[32px]">
          <h5 className="font-bold text-ternary text-[32px]">
            {projectData.name}
          </h5>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            odit, nostrum, error laborum aliquam aliquid quo laudantium officia
            impedit cum reiciendis! Doloremque iusto fugiat ipsa doloribus
            expedita ipsam, illo nostrum?
            <span className="text-black text-opacity-30 hover:underline">
              {" "}
              Daha fazla
            </span>
          </p>
        </div>
        <div className="relative">
          <div className="w-[280px] aspect-square relative">
            <Image
              layout="fill"
              objectFit="contain"
              src={projectData.logo}
              alt="support"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
