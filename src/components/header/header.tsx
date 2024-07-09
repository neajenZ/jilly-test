import SugarSelect from "../sugarSelect/sugarSelect";
import FlavorSelect from "../flavorSelect/flavorSelect";
import styles from './header.module.scss'



const Header = () => {


  return (
    <>
      <header className={styles.header}>
        <SugarSelect />
        <FlavorSelect />
      </header>
    </>
  )
};

export default Header;
