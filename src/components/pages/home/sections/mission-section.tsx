import Image from "next/image";
import React from "react";

const MissionSection = () => {
  return (
    <div className="bg-mission-bg bg-opacity-10 rounded-full min-h-[360px] pl-[120px] pr-[32px] items-center py-6 flex gap-x-[64px]">
      <div className="flex-1 self-stretch flex flex-col py-[32px] justify-center gap-y-[32px]">
        <h5 className="font-bold text-ternary text-[32px]">Misyon-Vizyon</h5>
        <p className="text-[20px]">
          İTÜ Gönüllülük Kulübü 2004 yılında kurulmuş bir öğrenci kulübüdür.
          Kulüp kurulduğu günden bu yana gerçekleştirdiği projelerle hem
          sosyal-kültürel sorunlara karşı duyarsız kalmamış hem de gönüllülük
          bilincini başta İTÜ'de olmak üzere her yerde yaymayı amaç edinmiştir.
          <span className="text-black text-opacity-30 hover:underline">
            {" "}
            Daha fazla
          </span>
        </p>
      </div>
      <div className="relative">
        <Image
          width={280}
          height={280}
          src="/assets/images/sections/mission.png"
          alt="support"
        />
      </div>
    </div>
  );
};

export default MissionSection;
