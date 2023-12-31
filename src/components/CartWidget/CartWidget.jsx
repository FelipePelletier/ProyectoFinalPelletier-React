import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      <strong> {cartItems} </strong>
    </div>
  );
};

export default CartWidget;
