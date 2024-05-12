"use client";
import React, { useEffect, useState } from "react";
import {
  FolderPlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Logcard from "@/components/mylogpage/logcard";
import { Draweradd } from "@/components/mylogpage/draweradd";
import { getLog } from "@/actions/logAction";
import { DefaultSkeleton } from "@/components/default/skeleton";

export default function MyLogs() {
  const [list, setList] = useState();

  useEffect(() => {
    const get = async () => {
      const result = await getLog();
      if (result?.status === 200) {
        setList(result?.data);
      }
    };
    get();
  }, []);

  return (
    <Card className="w-full my-6 border-t">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex items-center justify-between flex-wrap gap-2">
          <Typography variant="h5" color="blue-gray">
            Danh sách nhật ký của tôi
          </Typography>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Draweradd list={list}  setList={setList} />
          </div>
        </div>
      </CardHeader>
      {!list && (
        <div className="p-4">
          <DefaultSkeleton />
        </div>
      )}
      {list?.length > 0 && (
        <CardBody className="px-4 flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-4 mb-4 gap-2">
              <div className="border p-4 rounded-lg flex items-center justify-between">
                <h1>Tổng lượt xem:</h1>
                <p>{list?.reduce((total, log) => total + log?.view, 0)}</p>
              </div>
              <div className="border p-4 rounded-lg flex items-center justify-between">
                <h1>Tổng lượt bình luận:</h1>
                <p>{list?.reduce((total, log) => total + log?.cmt, 0)}</p>
              </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {list?.map(item => (
              <Logcard key={item.id} data={item} list={list} setList={setList} />
            ))}
          </div>
        </CardBody>
      )}
     {list?.length === 0 &&  <CardBody className="px-4">
        <div className="flex items-center justify-center flex-col h-[240px] select-none">
          <FolderPlusIcon className="w-12 h-12" />
          <p className="text-center">
            Bạn chưa có nhật ký nào thêm mới ngay thôi !
          </p>
        </div>
      </CardBody>}
    </Card>
  );
}
