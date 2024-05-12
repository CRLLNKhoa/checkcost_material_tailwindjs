"use client";
import {
  ChatBubbleLeftEllipsisIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { Button, Chip } from "@material-tailwind/react";
import React, { useState } from "react";
import { Draweredit } from "./draweredit";
import { deleteLog } from "@/actions/logAction";
import Toast from "@/libs/toast";

export default function Logcard({ data, list, setList }) {
  const [isLoading, setIsLoading] = useState(false);

  async function confirmDelete(id) {
    setIsLoading(true);
    var confirmDelete = confirm("Bạn có chắc muốn xóa phần tử này không?");
    if (confirmDelete) {
      const result = await deleteLog(id);
      if (result?.status === 200) {
        setList(list.filter((item) => item.id !== data?.id));
        Toast.fire({
          text: "Đã xóa nhật ký" + " " + "#" + id + " " + "thành công !",
          icon: "success",
        });
      }
    } else {
      console.log("Hủy xóa phần tử.");
    }
  }
  return (
    <div className="flex flex-col select-none bg-white shadow-md hover:border-green-500 duration-500 border p-4 rounded-md cursor-pointer">
      <div className="flex items-center justify-between w-full">
        <Chip
          variant="outlined"
          color="green"
          value={`Day: ${data?.day}`}
          className="rounded-sm mr-2"
        />
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-end text-sm gap-1 w-full">
            {data?.view}
            <EyeIcon className="w-4 h-4" />
          </span>
          <span className="flex items-center justify-end text-sm gap-1 w-full">
            {data?.cmt}
            <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-auto flex-wrap mt-4">
        <a target="_blank" href={`/logs/${data?.id}`}>
          <Button size="sm" color="green">
            Xem
          </Button>
        </a>
        <Draweredit data={data} list={list} setList={setList} />
        <Button loading={isLoading} onClick={() => confirmDelete(data?.id)} size="sm" color="red">
          Xóa
        </Button>
      </div>
    </div>
  );
}
