import React from "react";
import PropTypes from "prop-types";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

const seasonId = styled.div`
  img {
    width: 100px;
    height: 70px;
  }
`;

const TabComponents = ({ result }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>YT Video</Tab>
        <Tab>Production</Tab>
        <Tab>Season</Tab>
      </TabList>
      <TabPanel>여긴 YT Video</TabPanel>
      <TabPanel>
        {result &&
          result.production_companies.map((production_companies) => (
            <div>
              <ul>
                <li>{production_companies.name}</li>
                <li>{production_companies.origin_country}</li>
                <img
                  src={`https://image.tmdb.org/t/p/original${production_companies.logo_path}`}
                  width="100px"
                  height="100px"
                />
              </ul>
            </div>
          ))}
      </TabPanel>
      <TabPanel>
        <seasonId>
          {result &&
            result.seasons.map((season) => (
              <div>
                <ul>
                  <img
                    src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                  />
                  <li>{season.name}</li>
                </ul>
              </div>
            ))}
        </seasonId>
      </TabPanel>
    </Tabs>
  );
};

TabComponents.propTypes = {
  TvSeason: PropTypes.string,
};

export default TabComponents;
