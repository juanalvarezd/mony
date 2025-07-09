import styles from "@/errors/errors.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(8)
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
      {history.length > 2 && <p>Página no encontrada, <button className={styles["return"]} onClick={() => navigate(-1)}>volver atrás</button></p>}
      <p>Redireccionando a Inicio en <span className={styles["countdown"]}>{countdown}</span> </p>
    </div>
  )
}

export default NotFoundPage;