import React, { useEffect, useState } from "react";
import { products } from "../../assets/data";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useItemCollection } from "../../hooks/useItemCollection";

const ItemDetailContainer = () => {
  const { detailId } = useParams();

  const { data, loading } = useItemCollection("products", detailId);

  return <>{loading ? <h1>cargando...</h1> : <ItemDetail data={data} />}</>;
};

export default ItemDetailContainer;
