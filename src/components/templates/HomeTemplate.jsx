import MobilesBanner from "components/modules/home page/MobilesBanner";
import Brands from "components/modules/home page/HomeBrands";
import LaptopsBanner from "components/modules/home page/LaptopsBanner";
import styles from "./home.module.css";
import HomeProducts from "components/modules/home page/HomeProducts";
import HomeItems from "components/modules/home page/HomeItems";

function HomeTemplate() {
  return (
    <div className={styles.home}>
      <MobilesBanner />
      <HomeItems />
      <HomeProducts />
      <LaptopsBanner />
      <Brands />
    </div>
  );
}

export default HomeTemplate;
