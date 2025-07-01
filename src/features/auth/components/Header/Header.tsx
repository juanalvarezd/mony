import logo from "@/assets/logo-.png"
import styles from "@/features/auth/components/Header/header.module.css"

const Header = () => {
  return (
    <header className={styles["header"]}>
      <img className={styles["logo"]} src={logo} alt="" />
    </header>
  )
}

export default Header;