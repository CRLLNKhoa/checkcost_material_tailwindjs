"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import CardMenu from "./card-item-menu";
import {
  Bars4Icon,
  NewspaperIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  ClockIcon,
  CalculatorIcon,
} from "@heroicons/react/24/solid";

const menuItems = [
  {
    title: "Single Rewind",
    description: "Tìm kiếm day thích hợp để nâng skill.",
    icon: RectangleGroupIcon,
    link: "/tool/single-rewind",
    chipcolor: "red",
    chipvalue: "hot",
  },
  {
    title: "Double Rewind",
    description: "Tìm kiếm day thích hợp để tích vé.",
    icon: RectangleGroupIcon,
    link: "/tool/double-rewind",
    chipcolor: "red",
    chipvalue: "hot",
  },
  {
    title: "Thời gian Rewind",
    description: "Mốc thời gian của người chơi khác cung cấp.",
    icon: ClockIcon,
    link: "/tool/time-rewind",
    chipcolor: "red",
    chipvalue: "hot",
  },
  {
    title: "Nhật ký leo day",
    description: "Thông tin kỹ nâng của các người chơi.",
    icon: NewspaperIcon,
    link: "/logs",
    chipcolor: "blue",
    chipvalue: "new",
  },
  {
    title: "Đội hình phổ biến",
    description: "Đội hình các người chơi khác thường dùng.",
    icon: SquaresPlusIcon,
    link: "/teams",
    chipcolor: "blue",
    chipvalue: "new",
  },
  {
    title: "World Tree",
    description: "Đề cử nâng cấp WT được nhiều người dùng.",
    icon: SquaresPlusIcon,
    link: "/",
    chipcolor: "gray",
    chipvalue: "close",
  },
  {
    title: "Tính Dame",
    description: "Find the perfect solution for your needs.",
    icon: CalculatorIcon,
    link: "/",
    chipcolor: "gray",
    chipvalue: "close",
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link: "/",
    chipcolor: "gray",
    chipvalue: "close",
  },
];

export default function Menu() {
  return (
    <main className="flex flex-col w-full gap-6">
      <Typography
        variant="h2"
        className="text-xl text-center uppercase"
        as="string"
      >
        🔥Các công cụ nổi bậc🔥
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4">
        {menuItems?.map((item) => (
          <CardMenu
            key={item.title}
            title={item.title}
            icon={item.icon}
            chipcolor={item.chipcolor}
            chipvalue={item.chipvalue}
            link={item.link}
          />
        ))}
      </div>
    </main>
  );
}
