import React from "react";

export default function Listskill({em,bd,up,ins,ms,bs,hl}) {
  return (
    <div className="flex items-center gap-2 justify-center flex-wrap">
        <div className="border px-2 pr-4 py-1 rounded-lg bg-brown-500 flex items-center text-sm text-white">
            <img src="/skill/empng.png" alt="img skill" className="h-8" />
            <p className="ml-2 mr-4">: {em}</p>
        </div>
        <div className="border px-2 py-1 pr-4 rounded-lg bg-brown-500 flex items-center text-sm text-white">
            <img src="/skill/bdpng.png" alt="img skill" className="h-8" />
           <p className="ml-2 mr-4">: {bd}</p>
        </div>
        <div className="border px-2 py-1 pr-4 rounded-lg bg-brown-500 flex items-center text-sm text-white">
            <img src="/skill/uppng.png" alt="img skill" className="h-8" />
           <p className="ml-2 mr-4">: {up}</p>
        </div>
        <div className="border px-2 py-1 pr-4 rounded-lg bg-brown-500 flex items-center text-sm text-white">
            <img src="/skill/inspng.png" alt="img skill" className="h-8" />
           <p className="ml-2 mr-4">: {ins}</p>
        </div>
        <div className="border px-2 py-1 pr-4 rounded-lg bg-brown-500 flex items-center text-sm text-white">
            <img src="/skill/mspng.png" alt="img skill" className="h-8" />
           <p className="ml-2 mr-4">: {ms}</p>
        </div>
        <div className="border px-2 py-1 pr-4 rounded-lg bg-brown-500 flex items-center text-sm text-white">
            <img src="/skill/bspng.png" alt="img skill" className="h-8" />
           <p className="ml-2 mr-4">: {bs}</p>
        </div>
        <div className="border px-2 py-1 pr-4 rounded-lg bg-brown-500 flex items-center text-sm text-white">
            <img src="/skill/hlpng.png" alt="img skill" className="h-8" />
           <p className="ml-2 mr-4">: {hl}</p>
        </div>
    </div>
  );
}
