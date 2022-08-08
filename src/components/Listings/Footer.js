import { useNavigate } from "react-router-dom";
import CartButton from "../Actions/CartButton";
import styles from "./Footer.module.css";

const Footer = (props) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    if (props.foot) {
      navigate("/confirm");
    } else if (props.loginState) {
      navigate("/checkout");
    } else if (!props.foot) {
      navigate("/login");
      props.onHide();
    }
  };
  return (
    <div className={styles.footer}>
      <div className={props.foot ? styles.footC : styles.foot}>
        {!props.foot && (
          <CartButton onClickingCart={props.onCartButton} show={props.show} />
        )}
        <span>
          {props.foot
            ? "Select Payment"
            : props.loginState
            ? "Continue"
            : "Login"}
        </span>
        <i className="fa-solid fa-arrow-right" onClick={clickHandler}></i>
      </div>
    </div>
  );
};

export default Footer;
