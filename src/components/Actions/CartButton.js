import { useContext } from "react";
import CartContext from "../../contextstore/CartContext";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const ctx = useContext(CartContext);
  const items = ctx.dishes.reduce((currentValue, dish) => {
    return currentValue + dish.amount;
  },0);
  const itemNumber = `${items} item(s)`;
  const tm = ctx.total;
  const total = `Total Rs: ${tm.toFixed(2)}`;
  return (
    <div className={styles.cartbutton} onClick={props.onClickingCart}>
      {/* <button className={styles.cartbutton} onClick={props.onClickingCart}> */}
        <div>
          <p>{itemNumber}</p>
          <p>{total}</p>
        </div>
        {!props.show && (
          <i className="fa-solid fa-angle-up"></i>
        )}
        {props.show && (
          <i className="fa-solid fa-angle-down"></i>
        )}
    {/* </button> */}
    </div>
  );
};

export default CartButton;
