"use client";
import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import ButtonReadMore from "../button/button-read-more";
import Cardteam from "./cardteam";
import { getTeams6 } from "@/actions/logAction";
import Listskeletion from "@/components/default/listskeletion";
import { useRouter } from "next/navigation";

export default function Teamlist() {
  const [list, setList] = useState();
  const router = useRouter()

  useEffect(() => {
    const get = async () => {
      const result = await getTeams6();
      if (result?.status === 200) {
        setList(result?.data);
      }
    };
    get();
  }, []);
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
        <ButtonReadMore link={"/teams"} />
      </div>
      {!list && <Listskeletion />}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-4">
        {list?.map((item) => (
          <Cardteam key={item.id} data={item} />
        ))}
      </div>
      <div className="flex items-center justify-center my-6 lg:hidden">
        <Button onClick={() => router.push("/teams")} className="rounded-sm" size="sm" color="blue">
          Xem tất cả
        </Button>
      </div>
    </div>
  );
}
