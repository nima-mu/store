import { BiArrowFromBottom } from "react-icons/bi";
import styles from "./top.module.css";

function Top() {
  let clickHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className={styles.top} onClick={clickHandler}>
      <BiArrowFromBottom />
    </div>
  );
}

export default Top;
