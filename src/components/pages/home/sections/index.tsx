import React from "react";
import ProjectSection from "./project-section";
import { ProjectType } from "@/types/model";
import MissionSection from "./mission-section";
import SupportSection from "./support-section";
import JoinSection from "./join-section";

const getProjectData = async (): Promise<{
  data?: ProjectType[];
  message?: string;
  success: boolean;
}> => {
  try {
    const res = await fetch("https://cdn.itugonulluluk.com/projects", {
      cache: "no-cache",
    });
    const json = await res.json();
    return {
      data: json?.data.filter((d: ProjectType) => d.shortName !== "IGK"),
      success: true,
    };
  } catch {
    return {
      success: false,
      message: "could not get data",
    };
  }
};

const HomeSections = async () => {
  const projectData = await getProjectData();
  if (!projectData.success) {
    return <div className="px-page-padding py-3">Veriler Getirilemedi</div>;
  }
  return (
    <div className="mt-[120px] space-y-[64px]">
      <div className="px-page-padding space-y-[64px]">
        <MissionSection />
        <SupportSection />
      </div>
      {projectData.data?.map((p, i) => (
        <ProjectSection key={p.id} projectData={p} odd={i % 2 === 1} />
      ))}
      <div className="px-page-padding">
        <JoinSection />
      </div>
    </div>
  );
};

export default HomeSections;
