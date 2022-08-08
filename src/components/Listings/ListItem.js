import { useContext, useState } from "react";
import CartContext from "../../contextstore/CartContext";
import AsButton from "../Actions/AsButton";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const [buttonState, setButtonState] = useState(false);
  const ctx = useContext(CartContext);
  const addToCart = (amount) => {
    ctx.addDish({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
    console.log(props.id);
  };

  const buttonStateHandler = () =>{
    setButtonState(prevState => !prevState);
  }

  const clickHandler = () => {
    addToCart(1);
    buttonStateHandler();
  };
  return (
    <li className={styles.item}>
      <img src={props.src} alt="Dish" />
      <div className={styles.content}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styles.stick}>
          <div className={styles.price}>
            <span>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {props.price}
            </span>
            <span className={styles.lineThrough}>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {props.oldprice}
            </span>
          </div>
          <div className={styles.btn}>
            {!buttonState && (
              <button className={styles.button} onClick={clickHandler}>
                Add
              </button>
            )}
            {buttonState && (
              <AsButton
                itemId = {props.id}
                buttonHandler={buttonStateHandler}
              />
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
