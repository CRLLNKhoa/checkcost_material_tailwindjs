"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Chip,
} from "@material-tailwind/react";
import Imghero from "../loglist/imghero";
import { cn } from "@/libs/cn";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";

export default function Cardteam({ data }) {
  const { note, rank, name, day, teams } = data;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div
        onClick={handleOpen}
        className="flex flex-col bg-white shadow-md hover:border-blue-500 duration-500 border p-4 rounded-md cursor-pointer"
      >
        <div className="flex items-center">
          <span
            className={cn(
              "flex items-center uppercase lg:text-lg text-xl mr-4 justify-center rounded-sm size-[32px] bg-red-500 lg:size-[25px] text-white",
              rank === "s" && "bg-red-500",
              rank === "s" && "bg-yellow-500",
              rank === "s" && "bg-blue-500",
              rank === "s" && "bg-gray-500"
            )}
          >
            {rank || "s"}
          </span>
          <div className="flex items-center justify-between flex-1 gap-y-1 flex-wrap">
            <h1 className="font-semibold text-sm text-primary line-clamp-2">
              {name}
            </h1>
            <Chip
              variant="outlined"
              color="light-blue"
              size="sm"
              className="rounded-sm text-xs text-center"
              value={day || "All day"}
            />
          </div>
        </div>
        <div className="flex items-center gap-4 ml-auto flex-wrap mt-4">
          {teams?.map((item) => (
            <Imghero key={item} idhero={item} />
          ))}
        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{name}</DialogHeader>
        <DialogBody>
          <div className="flex flex-col">
            <div className="flex items-center gap-4 flex-wrap mb-4">
              {teams?.map((item) => (
                <Imghero key={item} idhero={item} />
              ))}
            </div>
            <Markdown remarkPlugins={[remarkGfm]}>{note}</Markdown>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Đóng</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
