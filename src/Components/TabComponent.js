import React from "react";
import PropTypes from "prop-types";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabComponents = ({ result }) => {
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
        {result &&
          result.seasons.map((season) => (
            <div>
              <ul>
                <li>{season.name}</li>
                <li>{season.season_number}</li>
                <li>{season.overview}</li>
                <li>{season.episode_count}</li>
                <li>{season.air_date}</li>
                <img
                  src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                />
              </ul>
            </div>
          ))}
      </TabPanel>
    </Tabs>
  );
};

TabComponents.propTypes = {
  TvSeason: PropTypes.string,
};

export default TabComponents;
