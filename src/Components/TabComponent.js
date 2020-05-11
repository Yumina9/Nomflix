import React from "react";
import PropTypes from "prop-types";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { tvApi } from "../api";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

// TODO
// tv API에 에피소드 받아오는 API 추가하기
// 라이프사이클 이해하기
// https://velog.io/@velopert/react-hooks
// 위 내용 활용해 적용해보기 컴포넌트에
const Season = styled.div`
  background-image: url(${(props) => props.bgImage});
`;

const TabComponents = ({ TvSeason, id, result }) => {
  // /tv/{tv_id}/season/{season_number}
  // const parsedId = parseInt(id);
  // if (parsedId) {
  //   ({
  //     data: { result },
  //   } = tvApi.TvSeason(parsedId));
  // }

  console.log(result);
  return (
    <Tabs>
      <TabList>
        <Tab>YT Video</Tab>
        <Tab>Production</Tab>
        <Tab>Season</Tab>
      </TabList>
      <TabPanel>여긴 YT Video</TabPanel>
      <TabPanel>여긴 Production</TabPanel>
      <TabPanel>
        {/* <Season
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../assets/noPosterSmall.png")
          }
        /> */}
      </TabPanel>
    </Tabs>
  );
};

TabComponents.propTypes = {
  TvSeason: PropTypes.string,
};

export default TabComponents;
