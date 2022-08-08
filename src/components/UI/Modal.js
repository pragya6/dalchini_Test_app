import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const Popup = (props) => {
  const popupClass =`${props.className} ${styles.popup}`;
  return (
    <div className={popupClass}>
      <div>{props.children}</div>
    </div>
  );
};

const toWhere = document.getElementById("modal");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, toWhere)}
      {ReactDOM.createPortal(<Popup>{props.children}</Popup>, toWhere)}
    </>
  );
};

export default Modal;
