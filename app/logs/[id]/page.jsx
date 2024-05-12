"use client";
import { getDetailLog, updateLog } from "@/actions/logAction";
import { DefaultSkeleton } from "@/components/default/skeleton";
import { CommentBoxTextarea } from "@/components/detaillog/cmt";
import Listrunes from "@/components/detaillog/listrunes";
import Listskill from "@/components/detaillog/listskill";
import Listwt from "@/components/detaillog/listwt";
import Imghero from "@/components/layouts/loglist/imghero";
import { useFollowStore } from "@/stores/followsStore";
import {
  BookmarkSquareIcon,
  CalendarDaysIcon,
  EyeIcon,
  FireIcon,
  RectangleGroupIcon,
  SparklesIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function DetailLog() {
  const params = useParams();
  const [log, setLog] = useState();
  const router = useRouter();

  useEffect(() => {
    const get = async () => {
      const result = await getDetailLog(params?.id);
      if (result?.status === 200) {
        setLog(result?.data[0]);
      }
    };
    get();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Gọi hàm khác ở đây sau 10 giây
      const view = async () => {
        const result = await updateLog(params?.id, { view: log?.view + 3 });
        console.log(result);
      };
      view();
    }, 10000);
    // Clear timeout khi component unmount
    return () => clearTimeout(timer);
  }, [log]);

  const follows = useFollowStore((state) => state.follows);
  const setFollows = useFollowStore((state) => state.setFollows);

  useEffect(() => {
    // Lấy mảng items từ localStorage khi component được mount
    const storedItems = localStorage.getItem("follows");
    if (storedItems) {
      setFollows(JSON.parse(storedItems));
    }
  }, []);

  const handleFollow = () => {
    // Kiểm tra xem newItem có tồn tại trong mảng items chưa
    if (!follows.includes(log?.player)) {
      // Tạo một bản sao của mảng items
      const updatedItems = [...follows];
      // Thêm mục mới vào bản sao
      updatedItems.push(log?.player);
      // Cập nhật state với mục mới
      setFollows(updatedItems);
      // Lưu trữ mảng mới vào localStorage
      localStorage.setItem("follows", JSON.stringify(updatedItems));
    } else {
      alert("Mục đã tồn tại trong danh sách!");
    }
  };

  const removeItem = () => {
    const updatedItems = follows.filter((item) => item !== log?.player);
    setFollows(updatedItems);
    localStorage.setItem("follows", JSON.stringify(updatedItems));
  };

  if (!log) {
    return (
      <div className="flex flex-col mt-6 mb-6 p-4 shadow-lg rounded-lg border-t w-full h-screen">
        <DefaultSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-6 mb-6 p-4 shadow-lg rounded-lg border-t">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-xl">
          <BookmarkSquareIcon className="w-8 h-8" />
          Nhật ký số #{params.id}
        </h1>
        {!follows.includes(log?.player) ? (
          <Button color="blue" onClick={handleFollow}>
            Theo dõi
          </Button>
        ) : (
          <Button color="red" onClick={removeItem}>
            Bỏ theo dõi
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <div className="flex items-center flex-wrap">
          <UserCircleIcon className="w-6 h-6" />
          <b className="ml-1 mr-4">Tên người chơi: </b>
          <p>{log?.player}</p>
        </div>
        <div className="flex items-center flex-wrap">
          <CalendarDaysIcon className="w-6 h-6" />
          <b className="ml-1 mr-4">Day: </b>
          <p>{log?.day}</p>
        </div>
        <div className="flex items-center flex-wrap">
          <EyeIcon className="w-6 h-6" />
          <b className="ml-1 mr-4">Lượt xem: </b>
          <p>{log?.view}</p>
        </div>
        <div className="border-y py-4 mt-4">
          <div className="flex items-center justify-start flex-wrap gap-y-2">
            <div className="flex items-center">
              <UsersIcon className="w-6 h-6" />
              <b className="ml-1 mr-4">Đội hình</b>
            </div>
            <div className="flex items-center gap-2 justify-center">
              {log?.team?.map((item) => (
                <Imghero key={item} idhero={item} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-start flex-wrap gap-y-2 mt-4">
            <div className="flex items-center">
              <FireIcon className="w-6 h-6" />
              <b className="ml-1 mr-4">Kỹ năng</b>
            </div>
            <Listskill
              em={log?.em}
              bd={log?.bd}
              up={log?.up}
              ins={log?.in}
              ms={log?.ms}
              bs={log?.bs}
              hl={log?.hl}
            />
          </div>
          <div className="flex items-center justify-start flex-wrap gap-y-2 mt-4">
            <div className="flex items-center">
              <SparklesIcon className="w-6 h-6" />
              <b className="ml-1 mr-4">Runes</b>
            </div>
            <Listrunes
              crit={log?.crit}
              dame={log?.dame}
              hero={log?.hero}
              cc={log?.cc}
              heal={log?.heal}
              mana={log?.mana}
            />
          </div>
          <div className="flex items-center justify-start flex-wrap gap-y-2 mt-4">
            <div className="flex items-center">
              <RectangleGroupIcon className="w-6 h-6" />
              <b className="ml-1 mr-4">World tree</b>
            </div>
            <Listwt data={log?.wt} />
          </div>
        </div>
        {log?.note && (
          <div>
            <p className="font-bold">Ghi chú:</p>
            <p>{log?.note}</p>
          </div>
        )}
        <div className="flex items-center justify-end">
          {log && (
            <Button
              onClick={() => router.push(`/logs/${log?.player}`)}
              variant="text"
              className="flex items-center gap-2"
            >
              Xem thêm của luongkhoa{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          )}
        </div>
        <CommentBoxTextarea countCmt={log?.cmt} />
      </div>
    </div>
  );
}
