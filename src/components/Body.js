import resList from "../utils/mockData";
import RestauarantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestauarantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestauarantCard resData={resList[0]} />
          <RestauarantCard resData={resList[1]} />
          <RestauarantCard resData={resList[2]} />
          <RestauarantCard resData={resList[3]} />
          <RestauarantCard resData={resList[4]} />
          <RestauarantCard resData={resList[5]} />
          <RestauarantCard resData={resList[6]} />
          <RestauarantCard resData={resList[7]} />
          <RestauarantCard resData={resList[8]} />
          <RestauarantCard resData={resList[9]} />
          <RestauarantCard resData={resList[10]} /> */}
        {/* <RestauarantCard
            resName="Chauhan Dhaba"
            food="Shahi Paneer"
            time="15 minute"
            rating="4 Star"
          /> */}
      </div>
    </div>
  );
};

export default Body;
