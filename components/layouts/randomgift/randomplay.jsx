"use client"
import React from "react";
import { Button } from "@material-tailwind/react";

export default function Randomplay() {
  return (
    <div className="flex items-center justify-center p-4 select-none">
      <div className="flex flex-col items-center">
        <p className="text-sm">Nhận quà ngẫu nhiên</p>
        <h3 className="uppercase font-semibold text-md">Ruby tiêu hoài không hết</h3>
        <p className="text-[120px]">🧧</p>
        <div className="flex items-center gap-2">
          <Button className="rounded-md" size="sm" color="blue">Nhận quà</Button>
          <Button className="rounded-md" size="sm" color="green">Quà đã nhận</Button>
        </div>
      </div>
    </div>
  );
}
