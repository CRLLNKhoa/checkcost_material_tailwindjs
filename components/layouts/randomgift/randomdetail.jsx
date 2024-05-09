"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Chancegift from "./chancegift";
import Tutorial from "./tutorial";
import Chanelgift from "./chanelgift";

export default function Randomdetail() {
  return (
    <div className="border-l border-dashed p-4 flex flex-col h-full">
      <Tabs value="lich_su">
        <TabsHeader>
          <Tab value="lich_su">Kênh nhận quà</Tab>
          <Tab value="ti_le">Tỉ lệ</Tab>
          <Tab value="the_le">Hướng dẫn</Tab>
        </TabsHeader>
        <TabsBody>
        <TabPanel value="lich_su">
            <Chanelgift />
          </TabPanel>
          <TabPanel value="ti_le">
            <Chancegift />
          </TabPanel>
          <TabPanel value="the_le">
            <Tutorial />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}
