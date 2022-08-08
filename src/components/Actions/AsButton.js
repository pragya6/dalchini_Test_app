import { useContext} from "react";
import CartContext from "../../contextstore/CartContext";
import styles from "./AsButton.module.css";

const AsButton = (props) => {
  const classes = `${styles.asbutton} ${
    props.className ? props.className : ""
  }`;

  const ctx = useContext(CartContext);
  
  const itemId = props.itemId;
  const itemIndex = ctx.dishes.findIndex(ind => ind.id === itemId);
  const item = ctx.dishes[itemIndex];

  const addHandler = () => {
    ctx.addDish({...item, amount: 1});
  };

  const removeHandler = () => {
    ctx.removeDish(itemId);
    if(item.amount === 1){
      props.buttonHandler();
    }
  };

  return (
    <div className={classes}>
      <button className={styles.calc} onClick={itemId? removeHandler : props.onRemove}>
        -
      </button>
      {itemId? item.amount : props.amount}
      <button className={styles.calc} onClick={itemId? addHandler : props.onAdd}>
        +
      </button>
    </div>
  );
};

export default AsButton;
