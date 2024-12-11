import JoinSection from "@/components/pages/home/sections/join-section";
import ProjectBook from "@/components/pages/projects/project-book";
import { ProjectDetailType } from "@/types/model";
import Image from "next/image";
import React, { Suspense } from "react";

const getProjectData = async (): Promise<ProjectDetailType[]> => {
  try {
    const res = await fetch("https://cdn.itugonulluluk.com/projects", {
      cache: "default",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    if (!json?.data) {
      throw new Error("Invalid data format received from API");
    }

    return json.data.filter((d: ProjectDetailType) => d.shortName !== "IGK");
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw new Error(
      `Could not get project data: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

const Page = async () => {
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
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectBook projects={projects} />
      </Suspense>
      <div className="px-page-padding py-8">
        <JoinSection />
      </div>
    </div>
  );
};

export default Page;
