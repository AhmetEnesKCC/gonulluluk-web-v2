import JoinSection from "@/components/pages/home/sections/join-section";
import ProjectBook from "@/components/pages/projects/project-book";
import { ProjectDetailType } from "@/types/model";
import Image from "next/image";
import React from "react";

const getProjectData = async (): Promise<ProjectDetailType[]> => {
  try {
    const res = await fetch("https://cdn.itugonulluluk.com/projects", {
      cache: "no-cache",
    });
    // Filter out IGK
    const json = await res.json();
    return json?.data.filter((d: any) => d.shortName !== "IGK");
  } catch {
    throw new Error("could not get data");
  }
};

const Projects = async () => {
  const projects = await getProjectData();

  return (
    <div className="pb-4">
      <h1 className="text-[48px] text-secondary font-bold text-center my-4 mt-8">
        Projelerimiz
      </h1>
      <div className="w-full aspect-[4.5] relative">
        <Image
          alt="contact-hero"
          src="/assets/images/projects-hero.png"
          layout="fill"
        />
      </div>
      <p className="px-page-padding py-6">
        İTÜ Gönüllülük Kulübü, toplumun çeşitli kesimlerine yönelik önemli
        sosyal sorumluluk projeleri gerçekleştiriyor. Gönüllülük ruhunu yaymak
        ve toplumsal fayda sağlamak amacıyla yola çıkan kulübümüz, çeşitli
        alanlarda etkileyici projelerle kendini kanıtlıyor. Kulübümüz, 2004
        yılında kurulduğundan beri aktif olarak yürüttüğü 7 kapsamlı projenin
        yanı sıra, Türkiye{"'"}deki afet bölgelerindeki faaliyetleriyle de
        önemli bir rol üstleniyor. İTÜ Gönüllülük Kulübü olarak, her bir
        projemizin topluma ve çevreye olumlu etkilerini artırmak için
        çabalıyoruz. Sosyal sorumluluk bilinciyle hareket eden gönüllülerimiz,
        aktif katılımlarıyla bu projelerin başarısını sağlıyor ve toplumsal
        dönüşüm için önemli bir güç oluşturuyorlar.
      </p>
      <ProjectBook projects={projects} />
      <div className="px-page-padding py-8">
        <JoinSection />
      </div>
    </div>
  );
};

export default Projects;
