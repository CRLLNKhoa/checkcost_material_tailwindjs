import React from "react";
import { Chip } from "@material-tailwind/react";
import Link from "next/link";
import { CalculatorIcon } from "@heroicons/react/24/outline";

export default function CardMenu({
  icon = CalculatorIcon,
  chipcolor = "red",
  chipvalue = "chip",
  title = "title",
  link = "/",
}) {
  return (
    <Link
      href={link}
      className="border border-t-gray-200 hover:border-light-blue-600 shadow-md duration-500 rounded-md p-4 flex items-center justify-between cursor-pointer"
    >
      <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
        {React.createElement(icon, {
          strokeWidth: 2,
          className: "h-6 text-gray-900 w-6",
        })}
      </div>
      <h2 className="font-bold">{title}</h2>
      <Chip color={chipcolor} value={chipvalue} />
    </Link>
  );
}
