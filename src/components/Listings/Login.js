import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import styles from "./Login.module.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [phoneNumberValue, setphoneNumberValue] = useState("");

  const clickHandler = () => {
    navigate(-1);
  };

  const phoneNumberChangeHandler = (event) => {
    setphoneNumberValue(event.target.value);
  };

  //Saving users credentials in database
  const infoSaver = async (number) => {
    await fetch(
      "https://react-http-2630b-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        body: JSON.stringify({ number: number }),
        header: { "Content-Type": "application/json" },
      }
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (phoneNumberValue.length !== 10) {
      return;
    }
    infoSaver(phoneNumberValue);
    props.onLogin();
    navigate("/checkout");
    setphoneNumberValue("");
  };

  return (
    <Modal className={styles.modal}>
      <header className={styles.header}>
        <i className="fa-solid fa-arrow-left" onClick={clickHandler}></i>
        <span>
          <h2>Login</h2>
        </span>
        <div></div>
      </header>
      <form className={styles.amount} onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Enter your 10-digits phone number"
          min="10"
          value={phoneNumberValue}
          onChange={phoneNumberChangeHandler}
        />
        <br></br>
        <button disabled={phoneNumberValue.length !== 10}>SUBMIT</button>
      </form>
      <p className={styles.p} onClick={clickHandler}>
        Will do it later
      </p>
    </Modal>
  );
};

export default Login;
