import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);

    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2].card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard.cardGroupMap.REGULAR.cards[1]?.card.card;

  return (
    <div>
      <h1>{name}</h1>

      <h2>
        <p>
          {"Main Course"} - {cuisines.join(",")} - {costForTwoMessage}{" "}
        </p>
      </h2>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            <h3>
              {item?.card?.info?.name} - {"RS."}{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </h3>
          </li>
        ))}
        {/*
        <li>{itemCards[3]?.card.info.name}</li>
        <li>{itemCards[4]?.card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
