import styles from "@/errors/errors.module.css"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(1000)
  const navigate = useNavigate();
  useEffect(() => {
    const counter = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          navigate("/")
          return 0
        }
        return prevCountdown - 1
      })
    }, 1000);

    return () => clearInterval(counter)
  }, [navigate])



  return (
    <div className={styles["errorPage"]}>
      <div className={styles["notFoundImage"]}></div>
      <Link to={"/"} className={styles["link"]}>Ir a inicio</Link>
      <p>Redireccionando en <span className={styles["countdown"]}>{countdown}</span> </p>
    </div>
  )
}

export default NotFoundPage;