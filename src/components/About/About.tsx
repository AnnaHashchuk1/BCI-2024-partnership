"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import AboutMobile from "./AboutMobile";
import AboutMonitor from "./AboutMonitor";

export default function About() {
  const { matches } = useMediaQuery("(max-width: 748px)");

  return <div>{matches ? <AboutMobile /> : <AboutMonitor />}</div>;
}
