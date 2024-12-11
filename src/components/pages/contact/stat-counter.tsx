"use client";

import React from "react";
import CountUp from "react-countup";

const StatCounter = ({ stat }: { stat: number }) => {
  return <CountUp end={stat} duration={2} />;
};

export default StatCounter;
