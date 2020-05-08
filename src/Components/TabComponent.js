import React from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SeasonDetail = this.show_id;
const DetailComponents = () => (
  <Tabs>
    <TabList>
      <Tab>YT Video</Tab>
      <Tab>Production</Tab>
      <Tab>Season</Tab>
    </TabList>
    <TabPanel>여긴 YT Video</TabPanel>
    <TabPanel>여긴 Production</TabPanel>
    <TabPanel>여긴 Season{SeasonDetail ? this.name : ""}</TabPanel>
  </Tabs>
);

export default DetailComponents;
