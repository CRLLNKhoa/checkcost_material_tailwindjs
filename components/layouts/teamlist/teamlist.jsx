"use client";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import ButtonReadMore from "../button/button-read-more";
import Cardteam from "./cardteam";

export default function Teamlist() {
  return (
    <div className="w-full flex flex-col mt-8 relative">
      <div className="flex items-center justify-between">
        <Typography
          variant="h2"
          className="text-xl text-center uppercase"
          as="string"
        >
          Đội hình thường dùng
        </Typography>
        <ButtonReadMore />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-4">
        <Cardteam />
        <Cardteam />
        <Cardteam />
        <Cardteam />
        <Cardteam />
        <Cardteam />
      </div>
      <div className="flex items-center justify-center my-6 lg:hidden">
        <Button className="rounded-sm" size="sm" color="blue">Xem tất cả</Button>
      </div>
    </div>
  );
}
