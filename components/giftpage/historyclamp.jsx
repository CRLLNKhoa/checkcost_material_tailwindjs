"use client";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const TABLE_HEAD = ["STT", "Quà", "Ngày nhận"];

const TABLE_ROWS = [
  {
    name: "1",
    job: "Chúc bạn may mắn lần sau !",
    date: "23/04/18",
  },
  {
    name: "2",
    job: "Bạn nhận được 10 ruby !",
    date: "23/04/18",
  },
  {
    name: "3",
    job: "Bạn nhận được 10 ruby !",
    date: "19/09/17",
  },
  {
    name: "4",
    job: "Bạn nhận được 10 ruby !",
    date: "24/12/08",
  },
  {
    name: "5",
    job: "Chúc bạn may mắn lần sau !",
    date: "04/10/21",
  },
];

export default function Historyclamp() {
  return (
    <div className="flex flex-col lg:p-4">
      <h1 className="font-bold">Lịch sử nhận quà</h1>
      <table className="w-full min-w-max table-auto text-left mt-4">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal text-left leading-none opacity-70"
              >
                STT
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal text-left leading-none opacity-70"
              >
                Quà nhận
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal text-right leading-none opacity-70"
              >
                Thời gian
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-right"
                  >
                    {date}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex gap-2 items-center justify-end mt-4 px-4">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal mr-auto"
        >
          Page 1 of 10
        </Typography>
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
