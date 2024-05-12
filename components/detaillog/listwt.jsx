"use client";
import React from "react";
export default function Listwt({data = "Chưa mở"}) {

  return (
    <div className="flex items-center gap-2 justify-center flex-wrap text-sm">
      {data?.split(/\s+/)?.map((item,index) => (
        <div key={index} className="uppercase bg-black px-4 text-white py-1 rounded-lg">
          {item}
        </div>
      ))}
    </div>
  );
}
