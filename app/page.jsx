"use client";
import { CarouselCustomArrows } from "@/components/layouts/banner/banner";
import Menu from "@/components/layouts/menu/menu";
import Viewradomgift from "@/components/layouts/randomgift/viewrandomgift";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen-xl flex-col items-center mx-auto my-6 gap-6 px-4">
      <div className="h-[260px] mb-6">
        <CarouselCustomArrows />
      </div>
      <Menu />
      <Viewradomgift />
    </main>
  );
}
