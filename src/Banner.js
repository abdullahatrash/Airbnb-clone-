import React, { useState } from "react";
import "./banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Date"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and start your imagination</h1>
        <h5>
          Plan a different Kind getaway to uncover the hidden gems near you.{" "}
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
