import React from "react";

const CartContext = React.createContext({
  dishes: [],
  total: 0,
  addDish: (dish) => {},
  removeDish: (id) => {},
  clearCart: () => {}
});

export default CartContext;