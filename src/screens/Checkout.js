import styles from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart/Cart";

const Checkout = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(-1);
  }
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <i className="fa-solid fa-arrow-left" onClick={clickHandler}></i>
        <span>Checkout</span>
        <div></div>
      </header>
      <div className={styles.container}>
        <div className={styles.pickup}>
          <div className={styles.heading}>Pick Up</div>
          <div className={styles.pees}>
            <p>Test</p>
            <p>Daalchini Office, Noida, Uttar Pradesh</p>
            <p>Order Expires within 30 mins</p>
          </div>
        </div>
        <div className={styles.cartdetails}>
          <div className={styles.heading}>Cart Details</div>
          <div className={styles.cartStyle}><Cart noHead='true'/></div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
