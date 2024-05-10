"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import {
  ChevronUpDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { time as dataSingleCost } from "@/json/time";
import { cn } from "@/libs/cn";

export default function SingleRewind() {
  const [currentDay, setCurrentDay] = useState(1000);
  const [planDay, setPlanDay] = useState(1100);
  const [resultTable, setResultTable] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    const currentday = localStorage.getItem("current-day");
    if (currentday) {
      setCurrentDay(Number(JSON.parse(currentday)));
      setPlanDay(Number(JSON.parse(currentday)));
    }
  }, []);

  const handleCheck = () => {
    localStorage.setItem("current-day", JSON.stringify(currentDay));
    const data = dataSingleCost.filter(
      (day) => Number(day.Day) >= currentDay && Number(day.Day) <= planDay
    );

    setResultTable(data);
  };

  function handleSortAZ() {
    setResultTable(resultTable.sort((a, b) => a.Day - b.Day));
  }

  function handleSortZA() {
    setResultTable(resultTable.sort((a, b) => b.Day - a.Day));
  }

  return (
    <div className="py-6 px-4 flex flex-col gap-6">
      <Card className="mt-4 border-t">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="text-center">
            Time Rewind
          </Typography>
          <Typography className="text-center text-sm">
            Giá trị của time càng nhỏ thời gian rewind càng ngắn
          </Typography>
          <div className="grid grid-cols-2 py-4 gap-4 max-w-lg mx-auto">
            <Input
              color="blue"
              className="w-full"
              variant="outlined"
              label="Ngày hiện tại"
              placeholder="Ngày hiện tại"
              type="number"
              step={10}
              min={"1000"}
              value={currentDay}
              onChange={(e) => setCurrentDay(e.target.value)}
            />
            <Input
              color="blue"
              className="w-full text-right"
              variant="outlined"
              label="Ngày dự kiến"
              placeholder="Ngày dự kiến"
              type="number"
              step={10}
              min={"1000"}
              value={planDay}
              onChange={(e) => setPlanDay(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-semibold">Quick selection</p>
            <div className="flex items-center gap-2 mt-2">
              <Button
                onClick={() => setPlanDay(currentDay + 100)}
                size="sm"
                className="rounded-md"
                variant="outlined"
              >
                +100
              </Button>
              <Button
                onClick={() => setPlanDay(currentDay + 300)}
                size="sm"
                className="rounded-md"
                variant="outlined"
              >
                +300
              </Button>
              <Button
                onClick={() => setPlanDay(currentDay + 500)}
                size="sm"
                className="rounded-md"
                variant="outlined"
              >
                +500
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <Button onClick={handleCheck} className="w-[240px]">
              Kiểm tra
            </Button>
          </div>
        </CardBody>
        {resultTable.length > 0 && (
          <CardFooter className="pt-0 flex items-center justify-center">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  <th
                    onClick={() => {
                      setSort(!sort);
                      if (sort) {
                        handleSortZA();
                      } else handleSortAZ();
                    }}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Day <ChevronUpDownIcon className="w-4 h-4" />
                    </Typography>
                  </th>

                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Time
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultTable.map(({ Day, Time }, index) => {
                  const classes = "p-4 border-b border-blue-gray-50";

                  return (
                    <tr
                      className={cn(
                        "text-white font-bold",
                        Number(Day) % 2 === 0 && "bg-[#1ac000]/60",
                        Number(Day) % 2 !== 0 && "bg-[#ff0000]/60"
                      )}
                      key={Day}
                    >
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal text-center"
                        >
                          {Day}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal text-center"
                        >
                          {Time}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardFooter>
        )}
        {resultTable.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[120px]">
            <InformationCircleIcon className="text-black w-12 h-12" />
            <h2 className="font-semibold">Nhập thông tin và nhấn kiểm tra !</h2>
          </div>
        )}
      </Card>
    </div>
  );
}
