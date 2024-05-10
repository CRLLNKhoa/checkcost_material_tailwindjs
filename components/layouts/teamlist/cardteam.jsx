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

export default function Cardteam() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div
        onClick={handleOpen}
        className="flex flex-col bg-white shadow-md hover:border-blue-500 duration-500 border p-4 rounded-md cursor-pointer"
      >
        <div className="flex items-center">
          <span className="flex items-center lg:text-lg text-xl mr-4 justify-center rounded-sm size-[32px] lg:size-[25px] bg-[#FF7F7F] text-white">
            S
          </span>
          <div className="flex items-center justify-between flex-1 gap-y-1 flex-wrap">
            <h1 className="font-semibold text-sm text-primary line-clamp-2">
              Fated Arcanists Lorem ipsum dolor sit.
            </h1>
            <Chip
              variant="outlined"
              color="light-blue"
              size="sm"
              className="rounded-sm text-xs text-center"
              value="chip outlined"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 ml-auto flex-wrap mt-4">
          <div className="border-2 border-red-900">
            <img
              className="size-[41px]"
              src="https://rerollcdn.com/characters/Skin/11/Ahri.png"
              alt="ảnh tướng"
            />
          </div>
          <div className="border-2 border-red-900">
            <img
              className="size-[41px]"
              src="https://rerollcdn.com/characters/Skin/11/Ahri.png"
              alt="ảnh tướng"
            />
          </div>
          <div className="border-2 border-red-900">
            <img
              className="size-[41px]"
              src="https://rerollcdn.com/characters/Skin/11/Ahri.png"
              alt="ảnh tướng"
            />
          </div>
          <div className="border-2 border-red-900">
            <img
              className="size-[41px]"
              src="https://rerollcdn.com/characters/Skin/11/Ahri.png"
              alt="ảnh tướng"
            />
          </div>
          <div className="border-2 border-red-900">
            <img
              className="size-[41px]"
              src="https://rerollcdn.com/characters/Skin/11/Ahri.png"
              alt="ảnh tướng"
            />
          </div>
          <div className="border-2 border-red-900">
            <img
              className="size-[41px]"
              src="https://rerollcdn.com/characters/Skin/11/Ahri.png"
              alt="ảnh tướng"
            />
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
