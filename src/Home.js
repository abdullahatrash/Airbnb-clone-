import React from "react";
import "./home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities to do from home, including experiences with Broadway casts and crews."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Boats, treeHouses and more these spaces are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/c1c8dd39-bd73-4535-9259-9d9efe05af80.jpg?aki_policy=large"
          title="Dome house"
          description="El Avistador. Montes de Toledo"
          price="$100 USD / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ea38da34-7082-45a6-895f-dd87019064ee.jpg?aki_policy=large"
          title="Treehouse hosted by Nadia"
          description="4 guests · 1 bedroom · 3 beds · 1 bath"
          price="$81 USD / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ea38da34-7082-45a6-895f-dd87019064ee.jpg?aki_policy=large"
          title="BNB RENTING chez Laurent "
          description="100m beach cosy studio 2pers center Antibes"
          price="€202/ night"
        />
      </div>
    </div>
  );
}

export default Home;
