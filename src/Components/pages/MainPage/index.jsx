import React from "react";
import { NavigationBlock } from "../../organisms/NavigationBlock";
import { SearchBlock } from "../../organisms/SearchBlock";
import { WeatherList } from "../../organisms/WeatherList";
import "./index.css";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="MainPageTop">
        <SearchBlock />
      </div>
      <div className="MainPageBottom">
        <NavigationBlock />
        <WeatherList />
      </div>
    </div>
  );
};