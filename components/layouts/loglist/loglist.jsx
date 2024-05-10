"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
import ButtonReadMore from "../button/button-read-more";
import Cardlog from "./cardlog";

export default function Loglist() {
  return (
    <div className="w-full flex flex-col mt-8 relative">
      <div className="flex items-center justify-between">
          <Typography
            variant="h2"
            className="text-xl text-center uppercase"
            as="string"
          >
            Nhật ký leo day
          </Typography>
          <ButtonReadMore />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-4">
        <Cardlog />
        <Cardlog />
        <Cardlog />
        <Cardlog />
        <Cardlog />
        <Cardlog />
      </div>
    </div>
  );
}
