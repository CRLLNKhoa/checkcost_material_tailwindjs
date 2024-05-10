"use client"
import { EyeIcon } from "@heroicons/react/24/outline";
import { Button, Chip } from "@material-tailwind/react";
import React from "react";
import Imghero from "./imghero";

export default function Cardlog() {
  return (
    <div className="flex flex-col select-none bg-white shadow-md hover:border-green-500 duration-500 border p-4 rounded-md cursor-pointer">
      <div className="flex items-center">
      <Chip variant="outlined" color="green" value="Day: 20000" className="rounded-sm mr-2" />
        <div className="flex items-center justify-between flex-1 flex-wrap">
          <h1 className="font-semibold text-sm text-primary line-clamp-2">
            #luongkhoa
          </h1>
          <div className="flex items-center">
            <span className="flex items-center text-sm gap-1">2,2K<EyeIcon className="w-4 h-4" /></span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-auto flex-wrap mt-4">
        <Imghero idhero={1} />
        <Imghero idhero={12} />
        <Imghero idhero={13} />
        <Imghero idhero={20} />
      </div>
      <div className="flex items-center justify-center my-6 lg:hidden">
        <Button className="rounded-sm" size="sm" color="blue">Xem tất cả</Button>
      </div>
    </div>
  );
}
