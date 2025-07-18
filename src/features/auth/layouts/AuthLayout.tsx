import { Outlet } from "react-router-dom";
import hero from "@/assets/pig-1.png";
import styles from "@/features/auth/layouts/authLayout.module.css"
import Header from "../components/Header/Header";


const AuthLayout = () => {
  return (
    <>
      <Header />
      <div className={styles["container"]}>
        <div className={styles["imageContainer"]}>
          <img className={styles["hero"]} src={hero} alt="Imagen de relleno" />
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default AuthLayout