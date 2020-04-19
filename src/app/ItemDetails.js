import React from "react";

import Item from "./Item";

const ItemDetails = ({cityList = []}) => {
    return (
        <div className="ow-full-container weather-container">
            {cityList.map((city) => {
                return (
                    <Item key={city.id} city={city} />
                );
            })}
        </div>
    )
};

export default ItemDetails;
