"use client";
import { getAllLog } from "@/actions/logAction";
import { Pagination } from "@/components/default/pagination";
import { DefaultSkeleton } from "@/components/default/skeleton";
import Cardlog from "@/components/layouts/loglist/cardlog";
import { InformationCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Card, IconButton, Typography } from "@material-tailwind/react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Logs() {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState();
  const [count, setCount] = useState();
  const [currentPage, setCurrentPage] = useState();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const router = useRouter()

  useEffect(() => {
    setCurrentPage(Number(page));
    const get = async () => {
      setIsLoading(true);
      const result = await getAllLog(Number(page) || 1);
      if (result?.status === 200) {
        setList(result?.data);
        setCount(result?.count);
        setIsLoading(false);
      }
    };
    get();
  }, [page]);

  useEffect(() => {
    setIsLoading(true);
    const get = async () => {
      const result = await getAllLog(Number(page) || 1);
      if (result?.status === 200) {
        setList(result?.data);
        setCount(result?.count);
        setIsLoading(false);
      }
    };
    get();
    setCurrentPage(Number(page || 1));
  }, []);

  return (
    <Card className="my-6 mx-2 p-4 border-t min-h-[600px]">
      <div className="flex items-center justify-between">
        <Typography as="string" variant="h5">
          Nhật ký của leo day
        </Typography>
        <IconButton onClick={() => router.push("/my-log")} variant="outlined" size="sm">
          <PlusIcon className="text-black w-4 h-4" />
        </IconButton>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-4">
        {!isLoading &&
          list?.length > 0 &&
          list?.map((item) => <Cardlog data={item} />)}
      </div>
      {list?.length === 0 && (
        <div className="h-[240px] flex items-center justify-center flex-col">
          <InformationCircleIcon className="w-12 h-12" />
          <p className="text-center">Người chơi này chưa thêm nhật ký !</p>
        </div>
      )}
      {isLoading && <DefaultSkeleton />}
      <div className="flex items-center justify-center my-8">
        <Pagination
          currentPage={currentPage}
          totalPage={Math.ceil(count / 12)}
        />
      </div>
    </Card>
  );
}
