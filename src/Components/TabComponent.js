import React from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// TODO
// tv API에 에피소드 받아오는 API 추가하기
// 라이프사이클 이해하기
// https://velog.io/@velopert/react-hooks
// 위 내용 활용해 적용해보기 컴포넌트에

const DetailComponents = ({ result }) => {
  // /tv/{tv_id}/season/{season_number}

  return (
    <Tabs>
      <TabList>
        <Tab>YT Video</Tab>
        <Tab>Production</Tab>
        <Tab>Season</Tab>
      </TabList>
      <TabPanel>여긴 YT Video</TabPanel>
      <TabPanel>여긴 Production</TabPanel>
      <TabPanel>여긴 Season</TabPanel>
    </Tabs>
  );
};

export default DetailComponents;
