"use client";
import { getGiftList } from "@/actions/userAction";
import { useRandomStore } from "@/store/randomstore";
import React, { useEffect } from "react";

export default function Chanelgift() {
  const resultList = useRandomStore((state) => state.resultList);
  const updateResult = useRandomStore((state) => state.updateResult);

  useEffect(() => {
    const get = async () => {
      const result = await getGiftList()
      if(result?.status === 200){
        updateResult(result?.data)
      }
    }
    get()
  }, [])
  
  return (
    <div className="flex flex-col text-sm gap-1">
      {resultList?.map((item,index) => (
        <div key={index} className="flex items-center">
          <h3 className="font-bold">{item?.player}:</h3>
          <p className="text-sm ml-2">{item?.gift}</p>
        </div>
      ))}
    </div>
  );
}
