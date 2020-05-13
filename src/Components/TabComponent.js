import React from "react";
import PropTypes from "prop-types";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

const YTVideo = styled.div`
  padding: 10px;
`;

const Production = styled.div`
  img {
    padding: 20px;
    width: 200px;
    height: 200px;
  }
  h2 {
    padding: 5px 20px;
    font-size: 15px;
  }
`;

const SeasonPosterWrapper = styled.div`
  display: flex;
`;

const SeasonPoster = styled.div`
  span {
    float: left;
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 5px;
  }
  margin: 5px;
`;

const TabComponents = ({ result }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>YT Video</Tab>
        <Tab>Production</Tab>
        <Tab>Season</Tab>
      </TabList>
      <TabPanel>
        {result &&
          result.videos.results.map((results) => (
            <YTVideo>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${results.key}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </YTVideo>
          ))}
      </TabPanel>
      <TabPanel>
        {result &&
          result.production_companies.map((production_companies) => (
            <Production>
              <img
                src={`https://image.tmdb.org/t/p/original${production_companies.logo_path}`}
              />
              <h2>companies name : {production_companies.name}</h2>
              <h2>companies country : {production_companies.origin_country}</h2>
            </Production>
          ))}
      </TabPanel>
      <TabPanel>
        <SeasonPosterWrapper>
          {result &&
            result.seasons.map((season) => (
              <SeasonPoster>
                <span>
                  <img
                    src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                  />
                  {season.name}
                </span>
              </SeasonPoster>
            ))}
        </SeasonPosterWrapper>
      </TabPanel>
    </Tabs>
  );
};

TabComponents.propTypes = {
  TvSeason: PropTypes.string,
};

export default TabComponents;
