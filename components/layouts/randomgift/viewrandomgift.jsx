"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
import Randomplay from "./randomplay";
import Randomdetail from "./randomdetail";

export default function Viewradomgift() {
  return (
    <div className="flex flex-col gap-6 mt-8 w-full">
      <Typography
        variant="h2"
        className="text-xl text-start uppercase"
        as="string"
      >
        Check in nhận quà
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center border border-dashed rounded-md">
        <Randomplay />
        <Randomdetail />
      </div>
    </div>
  );
}
