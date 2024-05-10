"use client"
import { Button } from "@material-tailwind/react";
import React from "react";

export default function Tasks() {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <h1 className="font-bold">Nhiêm vụ nhận thưởng **Đang phát triển**</h1>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
            <p>1. Tham gia discord <b className="text-red-500 text-sm">(x0 ruby)</b></p>
            <Button size="sm" variant="outlined">Đi đến</Button>
        </div>
        <div className="flex items-center justify-between w-full">
            <p>2. Tham gia beta <b className="text-red-500 text-sm">(x0 ruby)</b></p>
            <Button size="sm" color="green">Nhận thưởng</Button>
        </div>
      </div>
    </div>
  );
}
