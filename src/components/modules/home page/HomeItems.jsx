import { TbTruckDelivery } from "react-icons/tb";
import { SlWallet } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";

import styles from "./homeItems.module.css";
import useScrollReveal from "hook/useScrollReveal";

function HomeItems() {
  return (
    <div className={styles.homeItems}>
      <div className={styles.homeItem}>
        <TbTruckDelivery />
        <div>
          <p>ارسال رایگان</p>
          <span>برای سفارشات بالای 500 هزار تومان</span>
        </div>
      </div>
      <div className={styles.homeItem}>
        <AiOutlineSafety />
        <div>
          <p>گارانتی کیفیت</p>
          <span>7 روز ضمانت بازگشت وجه</span>
        </div>
      </div>
      <div className={styles.homeItem}>
        <BiSupport />
        <div>
          <p>پشتیبانی 24 ساعته</p>
          <span>پشتیبانی آنلاین و تلفنی هفت روز هفته</span>
        </div>
      </div>
      <div className={styles.homeItem}>
        <SlWallet />
        <div>
          <p>پرداخت امن</p>
          <span>با درگاه های پرداخت مطمئن</span>
        </div>
      </div>
    </div>
  );
}

export default HomeItems;
