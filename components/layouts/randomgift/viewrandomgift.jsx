"use client";
import { Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import Randomplay from "./randomplay";
import Randomdetail from "./randomdetail";
import { addGiftData, getGiftData } from "@/actions/userAction";
import { useRandomStore } from "@/store/randomstore";

export default function Viewradomgift() {

  const setNextTime = useRandomStore(state => state.setNextTime)
  const setCurrentRuby = useRandomStore(state => state.setCurrentRuby)

  useEffect(() => {
    const get = async () => {
      const result = await getGiftData();
      if (result.status === 200) {
        if (result?.data?.length === 0) {
          const newUser = await addGiftData();
          if (newUser.status === 200) {
            setNextTime(newUser.data[0].next_time)
            setCurrentRuby(newUser.data[0].current_ruby)
          }
        }
        else {
          setNextTime(result.data[0].next_time)
          setCurrentRuby(result.data[0].current_ruby)
        }
      }
    };
    get();
  }, []);

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
