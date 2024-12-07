import { homeStats } from "@/data/home-stats";
import React from "react";
import HomeStat from "./home-stat";

const HomeStats = () => {
  return (
    <div className="px-page-padding mt-[120px]">
      <div className="relative pb-[32px] w-full bg-stats-bg bg-opacity-10 flex gap-x-[64px] items-center justify-center">
        {homeStats.map((homeStat) => (
          <HomeStat key={homeStat.label} stat={homeStat} />
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
