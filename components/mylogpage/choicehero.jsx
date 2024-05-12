"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { common, epic, legendary, rare } from "@/datadefault/array";
import Imgheroselect from "./imgheroselect";

export function Choiceteam({team, setTeam}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} className="" size="sm" variant="outlined">
        Thêm
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="overflow-y-auto">
         <div className="flex flex-col max-h-[400px] overflow-y-auto">
            <h1 className="font-bold border-b border-black mb-2">Common</h1>
            <div className="flex flex-wrap items-center gap-4">
                {common.map(item => (
                     <Imgheroselect key={item} team={team} setTeam={setTeam} idhero={item} />
                ))}
            </div>
            <h1 className="font-bold border-b border-black mb-2 mt-2">Rare</h1>
            <div className="flex flex-wrap items-center gap-4">
                {rare.map(item => (
                     <Imgheroselect key={item} team={team} setTeam={setTeam} idhero={item} />
                ))}
            </div>
            <h1 className="font-bold border-b border-black mb-2 mt-2">Epic</h1>
            <div className="flex flex-wrap items-center gap-4">
                {epic.map(item => (
                     <Imgheroselect key={item} team={team} setTeam={setTeam} idhero={item} />
                ))}
            </div>
            <h1 className="font-bold border-b border-black mb-2 mt-2">Legendary</h1>
            <div className="flex flex-wrap items-center gap-4">
                {legendary.map(item => (
                     <Imgheroselect key={item} team={team} setTeam={setTeam} idhero={item} />
                ))}
            </div>
         </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
