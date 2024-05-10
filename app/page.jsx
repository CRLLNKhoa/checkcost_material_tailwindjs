"use client";
import { CarouselCustomArrows } from "@/components/layouts/banner/banner";
import Loglist from "@/components/layouts/loglist/loglist";
import Menu from "@/components/layouts/menu/menu";
import Viewradomgift from "@/components/layouts/randomgift/viewrandomgift";
import Teamlist from "@/components/layouts/teamlist/teamlist";

export default function Home() {
  return (
    <main className="flex flex-col items-center my-6 gap-6 px-4">
      <div className="h-[260px] mb-6">
        <CarouselCustomArrows />
      </div>
      <Menu />
      <Viewradomgift />
      <Loglist />
      <Teamlist />
    </main>
  );
}
