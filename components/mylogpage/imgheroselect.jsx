import { cn } from "@/libs/cn";
import Toast from "@/libs/toast";
import React from "react";

export default function Imgheroselect({ idhero, team, setTeam }) {

  const handleChoice = () => {
    if (!team.includes(idhero)) {
      if (team.length > 5) {
        alert("Tối đa có 6 anh hùng !")
      } else {
        setTeam([...team, idhero]);
      }
    } else setTeam(team.filter((item) => item !== idhero));
  };

  return (
    <div
      onClick={handleChoice}
      className={cn(
        "border-2 rounded-sm brightness-50 cursor-default",
        idhero > 0 && idhero < 7 && "border-gray-800",
        idhero > 6 && idhero < 13 && "border-blue-600",
        idhero > 12 && idhero < 20 && "border-purple-800",
        idhero > 19 && idhero < 42 && "border-yellow-800",
        team.includes(idhero) && "brightness-105"
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
