"use client";
import { useRandomStore } from "@/store/randomstore";
import React from "react";

export default function Chanelgift() {
  const resultList = useRandomStore((state) => state.resultList);
  return (
    <div className="flex flex-col text-sm gap-1">
      {resultList?.map((item) => (
        <div className="flex items-center">
          <h3 className="font-bold">{item?.player}:</h3>
          <p className="text-sm ml-2">{item?.gift}</p>
        </div>
      ))}
    </div>
  );
}
