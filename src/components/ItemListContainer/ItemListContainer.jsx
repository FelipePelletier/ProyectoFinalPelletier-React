import React, { useEffect, useState } from "react";
import { products } from "../../assets/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/UseCollection";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const { data, loading } = useCollection("products", categoryId);

  console.log(data);

  return <>{loading ? <h1>cargando...</h1> : <ItemList data={data} />}</>;
};

export default ItemListContainer;
