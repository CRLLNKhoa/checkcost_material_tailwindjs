import { cn } from "@/libs/cn";
import React from "react";

export default function Imghero({ idhero }) {
  return (
    <div
      className={cn(
        "border-2 rounded-sm",
        idhero > 0 && idhero < 7 && "border-gray-800",
        idhero > 6 && idhero < 13 && "border-blue-600",
        idhero > 12 && idhero < 20 && "border-purple-800",
        idhero > 19 && idhero < 42 && "border-yellow-800"
      )}
    >
      <img
        className="size-[41px]"
        src={`/hero/${idhero}.png`}
        alt="ảnh tướng"
      />
    </div>
  );
}
