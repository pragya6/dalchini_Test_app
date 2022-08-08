import { useContext } from "react";
import CartContext from "../../contextstore/CartContext";
// import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const cartAmnt = ctx.total;
  const totAmt = `Rs. ${cartAmnt}`;
  let content = "No Items In Cart";

  const removeItemHandler = (id) => {
    ctx.removeDish(id);
  };

  const addItemHandler = (item) => {
    ctx.addDish({ ...item, amount: 1 });
  };

  const cartList = ctx.dishes.map((meal, key) => (
    <CartItem
      key={key}
      name={meal.name}
      price={meal.price}
      amount={meal.amount}
      addItem={addItemHandler.bind(null, meal)}
      removeItem={removeItemHandler.bind(null, meal.id)}
    />
  ));

  if (cartList.length !== 0) {
    content = cartList;
  }

  return (
    <>
      {!props.noHead && (
        <header className={styles.header}>
          <div></div>
          <span>Cart Details</span>
          <i className="fa-solid fa-xmark" onClick={props.onCartShow}></i>
        </header>
      )}
      <ul className={styles.list}>
        <CartItem name="Items" price="Amount" amount="Qty." state={true} />
        {content}
      </ul>
      <div className={styles.amount}>
        <span>Total Amount</span>
        <span>{totAmt}</span>
      </div>
    </>
  );
};

export default Cart;
