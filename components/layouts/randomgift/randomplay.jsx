"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import { pickGift } from "@/libs/pickgift";
import { useRandomStore } from "@/store/randomstore";
import { useRouter } from "next/navigation";
import Toast from "@/libs/toast";

const gifts = [
  { name: "Chúc bạn may mắn lần sau !", ratio: 0.3, gift: 0 },
  { name: "Bạn nhận được 1 ruby !", ratio: 0.5, gift: 1 },
  { name: "Bạn nhận được 5 ruby !", ratio: 0.125, gift: 5 },
  { name: "Bạn nhận được 10 ruby !", ratio: 0.05, gift: 10 },
  { name: "Bạn nhận được 20 ruby !", ratio: 0.025, gift: 20 },
];

export default function Randomplay() {
  const resultList = useRandomStore((state) => state.resultList);
  const increaseCurrentRuby = useRandomStore((state) => state.increaseCurrentRuby);
  const updateResult = useRandomStore((state) => state.updateResult);

  const handleRandom = () => {
    const { name, gift } = pickGift(gifts);
    Toast.fire({
      icon: "success",
      title: name,
    });
    increaseCurrentRuby(gift)
    updateResult(
      resultList.slice(1).concat({ player: "luongkhoa", gift: name })
    );
  };

  const router = useRouter()
  const gotopage = () => {
    router.push("/gift") 
  }

  return (
    <div className="flex items-center justify-center p-4 select-none">
      <div className="flex flex-col items-center">
        <p className="text-sm">Nhận quà ngẫu nhiên</p>
        <h3 className="uppercase font-semibold text-md">
          Ruby tiêu hoài không hết
        </h3>
        <p className="text-[120px]">🧧</p>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleRandom}
            className="rounded-md"
            size="sm"
            color="blue"
          >
            Nhận quà
          </Button>
          <Button onClick={gotopage} className="rounded-md" size="sm" color="green">
            Quà đã nhận
          </Button>
        </div>
      </div>
    </div>
  );
}
