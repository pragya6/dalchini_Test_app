import AsButton from "../Actions/AsButton";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const price = props.state ? props.price : `Rs. ${props.price * props.amount}`;
  return (
    <li className={styles.items}>
      <p>{props.name}</p>
      {props.state ? (
        <p>{props.amount}</p>
      ) : (
        <AsButton
          amount={props.amount}
          onAdd={props.addItem}
          onRemove={props.removeItem}
        />
      )}
      <p>{price}</p>
    </li>
  );
};

export default CartItem;
