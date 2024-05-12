"use client";
import { addGiftData, getGiftData } from "@/actions/userAction";
import Historyclamp from "@/components/giftpage/historyclamp";
import { ProgressLabelOutside } from "@/components/giftpage/progress";
import Tasks from "@/components/giftpage/tasks";
import Toast from "@/libs/toast";
import { useRandomStore } from "@/store/randomstore";
import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";

export default function Gift() {
  const currentRuby = useRandomStore((state) => state.currentRuby);

  const handleGetGift = () => {
    if (currentRuby > 10000) {
      Toast.fire({
        icon: "success",
        title: "Đã thông báo đến Admin !",
      });
    } else
      Toast.fire({
        icon: "error",
        title: `Còn thiếu ${10000 - currentRuby} ruby !`,
      });
  };

  const setNextTime = useRandomStore((state) => state.setNextTime);
  const setCurrentRuby = useRandomStore((state) => state.setCurrentRuby);

  useEffect(() => {
    const get = async () => {
      const result = await getGiftData();
      if (result.status === 200) {
        if (result?.data?.length === 0) {
          const newUser = await addGiftData();
          if (newUser.status === 200) {
            setNextTime(newUser.data[0].next_time);
            setCurrentRuby(newUser.data[0].current_ruby);
          }
        } else {
          setNextTime(result.data[0].next_time);
          setCurrentRuby(result.data[0].current_ruby);
        }
      }
    };
    get();
  }, []);
  return (
    <div className="py-6 px-4 flex flex-col">
      <Typography as={"string"} variant="h4">
        Trang quà tặng
      </Typography>
      <Typography
        as={"string"}
        variant="p"
        className="text-sm text-muted-foreground"
      >
        Tích đủ số lượng ruby nhất định sẽ đổi được.
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6">
        <div className="flex flex-col lg:border-r lg:pr-4 py-6 gap-4">
          <h1 className="font-semibold">Tiến trình</h1>
          <ProgressLabelOutside />
          <div className="flex items-center justify-end flex-wrap gap-4">
            <Button color="blue">Bảng xếp hạng</Button>
            <Button color="red" onClick={handleGetGift}>
              Nhận quà
            </Button>
          </div>
          <Tasks />
        </div>
        <Historyclamp />
      </div>
    </div>
  );
}
