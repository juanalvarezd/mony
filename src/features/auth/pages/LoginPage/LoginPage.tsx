import LoginForm from "../../components/LoginForm/LoginForm"
import styles from "@/features/auth/pages/LoginPage/loginPage.module.css"
const LoginPage = () => {
  return (
    <main className={styles["main"]}>
      <h1>Iniciar sesión</h1>
      <LoginForm />
    </main>
  )
}

export default LoginPage