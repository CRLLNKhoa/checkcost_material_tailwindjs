import React from "react";

export default function Listrunes({crit,dame,hero,cc,heal,mana}) {
  return (
    <div className="flex items-center gap-2 justify-center flex-wrap">
        <div className="border px-2 py-1 pr-4 rounded-lg bg-gray-500 flex items-center text-sm text-white">
            <img src="/runes/crit.webp" alt="img runes" className="h-8" />
            <p className="ml-2 mr-4">: {crit?.lv}</p>
            <p>{" "}Unl ({crit?.lvUnl})</p>
        </div>
        <div className="border px-2 py-1 pr-4 rounded-lg bg-gray-500 flex items-center text-sm text-white">
            <img src="/runes/dame.webp" alt="img runes" className="h-8" />
           <p className="ml-2 mr-4">: {dame?.lv}</p>
            <p>{" "}Unl ({dame?.lvUnl})</p>
        </div>
        <div className="border px-2 py-1 pr-4 rounded-lg bg-gray-500 flex items-center text-sm text-white">
            <img src="/runes/hero.webp" alt="img runes" className="h-8" />
           <p className="ml-2 mr-4">: {hero?.lv}</p>
            <p>{" "}Unl ({hero?.lvUnl})</p>
        </div>
        {heal && <div className="border px-2 py-1 pr-4 rounded-lg bg-gray-500 flex items-center text-sm text-white">
            <img src="/runes/heal.webp" alt="img runes" className="h-8" />
           <p className="ml-2 mr-4">: {heal}</p>
           
        </div>}
        {cc &&  <div className="border px-2 py-1 pr-4 rounded-lg bg-gray-500 flex items-center text-sm text-white">
            <img src="/runes/cc.webp" alt="img runes" className="h-8" />
            <p className="ml-2 mr-4">: {cc}</p>
        </div>}
        {mana && <div className="border px-2 py-1 pr-4 rounded-lg bg-gray-500 flex items-center text-sm text-white">
            <img src="/runes/mana.webp" alt="img runes" className="h-8" />
            <p className="ml-2 mr-4">: {mana}</p>
        </div>}
    </div>
  );
}
