import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../contextstore/CartContext";
import styles from "./Confirm.module.css";

const Confirm = () => {
  const navigate = useNavigate();
  const ctx = useContext(CartContext);
  const clickHandler = () => {
    navigate('/');
    ctx.clearCart();//Clearing the cart after successful ordering
  }
  return <section className={styles.confirm}>
    <div className={styles.content}>
      <p>Order Confirmed!!</p>
      <button onClick={clickHandler}>Go Back</button>
    </div>
  </section>;
};

export default Confirm;
