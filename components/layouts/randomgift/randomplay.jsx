"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { pickGift } from "@/libs/pickgift";
import { useRandomStore } from "@/store/randomstore";
import { useRouter } from "next/navigation";
import Toast from "@/libs/toast";
import { useUser } from "@clerk/nextjs";
import { addGifted, updateGiftData } from "@/actions/userAction";
import { getTomorrowDateString } from "@/libs/until";

const gifts = [
  { name: "Chúc bạn may mắn lần sau !", ratio: 0.3, gift: 0 },
  { name: "Bạn nhận được 1 ruby !", ratio: 0.5, gift: 1 },
  { name: "Bạn nhận được 5 ruby !", ratio: 0.125, gift: 5 },
  { name: "Bạn nhận được 10 ruby !", ratio: 0.05, gift: 10 },
  { name: "Bạn nhận được 20 ruby !", ratio: 0.025, gift: 20 },
];

export default function Randomplay() {
  const resultList = useRandomStore((state) => state.resultList);
  const increaseCurrentRuby = useRandomStore(
    (state) => state.increaseCurrentRuby
  );
  const updateResult = useRandomStore((state) => state.updateResult);
  const nextTime = useRandomStore((state) => state.nextTime);
  const currentRuby = useRandomStore((state) => state.currentRuby);
  const setNextTime = useRandomStore((state) => state.setNextTime);
  const { isSignedIn, user } = useUser();
  const [ready, setReady] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleRandom = async () => {
    const { name, gift } = pickGift(gifts);
    setIsLoading(true);
    const result = await addGifted({
      player: user?.username,
      user_id: user?.id,
      gift: name,
    });
    if (result?.status === 200) {
      const newNextTime = getTomorrowDateString();
      const resultUpdate = await updateGiftData({
        next_time: newNextTime,
        current_ruby: currentRuby + gift,
      });
      if (resultUpdate?.status === 200) {
        console.log("test 3");
        Toast.fire({
          icon: "success",
          title: name,
        });
        increaseCurrentRuby(gift);
        updateResult(
          resultList
            .slice(1)
            .concat({ player: result?.data[0].player, gift: name })
        );
        setNextTime(newNextTime);
        setIsLoading(false);
      }
    }
  };

  const router = useRouter();
  const gotopage = () => {
    router.push("/gift");
  };

  useEffect(() => {
    function isPastDate(dateString) {
      // Tạo đối tượng Date từ chuỗi ngày (định dạng dd/mm/yyyy)
      const parts = dateString.split("/");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Trừ đi 1 vì tháng bắt đầu từ 0
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day);

      // So sánh với ngày hiện tại
      const currentDate = new Date();
      return date < currentDate;
    }
    setReady(isPastDate(nextTime));
  }, [nextTime]);

  return (
    <div className="flex items-center justify-center p-4 select-none">
      <div className="flex flex-col items-center">
        <p className="text-sm">Nhận quà ngẫu nhiên</p>
        <h3 className="uppercase font-semibold text-md">
          Ruby tiêu hoài không hết
        </h3>
        <p className="text-[120px]">🧧</p>
        <div className="flex items-center gap-2">
          {!isSignedIn && (
            <Button className="rounded-md" size="sm" color="blue">
              Đăng nhập
            </Button>
          )}
          {isSignedIn && ready && (
            <Button
              loading={isLoading}
              onClick={handleRandom}
              className="rounded-md"
              size="sm"
              color="blue"
            >
              Nhận quà
            </Button>
          )}
          {isSignedIn && !ready && (
            <Button
              onClick={() => {
                Toast.fire({
                  text: "Hôm nay đã nhận !",
                  icon: "error",
                });
              }}
              className="rounded-md"
              size="sm"
              color="red"
            >
              Đã nhận
            </Button>
          )}
          <Button
            onClick={gotopage}
            className="rounded-md"
            size="sm"
            color="green"
          >
            Quà đã nhận
          </Button>
        </div>
      </div>
    </div>
  );
}
