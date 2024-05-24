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
import dataSingleCost from "@/json/doubleCost";
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
      (day) => day.day >= currentDay && day.day <= planDay
    );
    setResultTable(data);
  };

  function handleSortAZ() {
    setResultTable(resultTable.sort((a, b) => a.cost - b.cost));
  }

  function handleSortZA() {
    setResultTable(resultTable.sort((a, b) => b.cost - a.cost));
  }

  return (
    <div className="py-6 px-4 flex flex-col gap-6">
      <Card className="mt-4 border-t">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="text-center">
            Double Rewind
          </Typography>
          <Typography className="text-center text-sm">
            Giá trị của cost càng nhỏ thời gian rewind càng ngắn
          </Typography>
          <div className="grid lg:grid-cols-2 py-4 gap-4 max-w-lg mx-auto">
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
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 text-center"
                    >
                      DAY
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 text-center"
                    >
                      SKIP DAY
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 text-center"
                    >
                      TICKETS
                    </Typography>
                  </th>
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
                      COST <ChevronUpDownIcon className="w-4 h-4" />
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultTable.map(({ day, skip, tickets, cost }, index) => {
                  const classes = "p-4 border-b border-blue-gray-50";

                  return (
                    <tr
                      className={cn(
                        "text-white font-bold",
                        cost >= 262 && cost <= 298 && "bg-[#1ac000]",
                        cost >= 298 && cost <= 334 && "bg-[#33b300]",
                        cost >= 334 && cost <= 370 && "bg-[#4d9900]",
                        cost >= 370 && cost <= 406 && "bg-[#669900]",
                        cost >= 406 && cost <= 443 && "bg-[#808000]",
                        cost >= 443 && cost <= 479 && "bg-[#996600]",
                        cost >= 479 && cost <= 515 && "bg-[#b24c00]",
                        cost >= 515 && cost <= 551 && "bg-[#cc3200]",
                        cost >= 551 && cost <= 587 && "bg-[#e51900]",
                        cost >= 587 && cost <= 624 && "bg-[#ff0000]"
      
                      )}
                      key={day}
                    >
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal text-center"
                        >
                          {day}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal text-center"
                        >
                          {skip}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal text-center"
                        >
                          {Math.floor(tickets)}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="white"
                          className="font-medium text-center"
                        >
                          {Math.floor(cost)}
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
