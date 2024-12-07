"use client";

import React from "react";
import { HomeStatType } from "@/types/component";
import Image from "next/image";
import CountUp from "react-countup";

const HomeStat = ({ stat }: { stat: HomeStatType }) => {
  return (
    <div className="mt-[-80px] flex flex-col items-center gap-y-[10px] text-foreground-stat font-[600] text-[20px]">
      <Image width={160} height={160} src={stat.imageSrc} alt={stat.label} />
      <h6>
        <CountUp end={stat.stat} start={0} duration={2.5} /> {stat.more && "+"}
      </h6>
      <h6>{stat.label}</h6>
    </div>
  );
};

export default HomeStat;
