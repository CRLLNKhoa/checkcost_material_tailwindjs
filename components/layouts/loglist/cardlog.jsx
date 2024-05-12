"use client"
import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Button, Chip } from "@material-tailwind/react";
import React from "react";
import Imghero from "./imghero";
import Link from "next/link";

export default function Cardlog({data}) {
  const {id,day,player,view, team,cmt} = data
  return (
    <Link href={`/logs/${id}`} className="flex flex-col select-none bg-white shadow-md hover:border-green-500 duration-500 border p-4 rounded-md cursor-pointer">
      <div className="flex items-center">
      <Chip variant="outlined" color="green" value={`Day: ${day}`} className="rounded-sm mr-2" />
        <div className="flex items-center justify-between flex-1 flex-wrap">
          <h1 className="font-semibold text-sm text-primary line-clamp-1 italic">
            #{player}
          </h1>
          <div className="flex items-center gap-2">
            <span className="flex items-center text-sm gap-1">{view || 0}<EyeIcon className="w-4 h-4" /></span>
            <span className="flex items-center text-sm gap-1">{cmt || 0}<ChatBubbleLeftRightIcon className="w-4 h-4" /></span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-auto flex-wrap mt-4">
        {team?.map(item => (
          <Imghero key={item} idhero={item} />
        ))}
      </div>
    </Link>
  );
}
