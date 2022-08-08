import { useReducer } from "react";
import CartContext from "./CartContext";

const initials = {
  dishes: [],
  totalPrice: 0,
};

const cartManager = (state, action) => {
  if (action.type === "add") {
    const totalCalcPrice = state.totalPrice + (action.item.amount * action.item.price);

    const existingItemIndex = state.dishes.findIndex(
      (it) => it.id === action.item.id
    );
    const existingItem = state.dishes[existingItemIndex];

    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [ ...state.dishes ];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.dishes.concat(action.item);
    }

    return { dishes: updatedItems, totalPrice: totalCalcPrice };
  }

  if(action.type === 'remove'){
    const existingItemIndex = state.dishes.findIndex(it => it.id === action.id);
    const existingItem = state.dishes[existingItemIndex];
    const totalCalcPrice = state.totalPrice - existingItem.price;

    let updatedItems;

    if(existingItem.amount === 1){
      updatedItems = state.dishes.filter( itm => itm.id !== action.id);
    }else{
      const updatedItem = {...existingItem, amount: existingItem.amount-1};
      updatedItems = [...state.dishes];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      dishes: updatedItems,
      totalPrice: totalCalcPrice
    }
  }

  if (action.type === "clear") {
    return initials;
  }
  return initials;
};

const ContextProvider = (props) => {
  const [cartDish, cartActions] = useReducer(cartManager, initials);

  const addDishHandler = (dish) => {
    cartActions({ type: "add", item: dish });
  };

  const removeDishHandler = (id) => {
    cartActions({ type: "remove", id: id });
  };

  const clearCartHandler = () => {
    cartActions({ type: "clear" });
  };

  const cartContext = {
    dishes: cartDish.dishes,
    total: cartDish.totalPrice,
    addDish: addDishHandler,
    removeDish: removeDishHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
