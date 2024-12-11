import HomeHero from "@/components/pages/home/hero";
import HomeSections from "@/components/pages/home/sections";
import HomeStats from "@/components/pages/home/stats";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <hr className="mx-page-padding bg-ternary h-[1px]" />
      <HomeStats />
      <HomeSections />
    </div>
  );
}
 