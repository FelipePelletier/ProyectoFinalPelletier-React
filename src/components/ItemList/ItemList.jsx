import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data }) => {
  return (
    <div>
      {data?.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
