import SignupForm from "../../components/AuthForm/SignupForm"
import styles from "@/features/auth/pages/SignupPage/signupPage.module.css"
const SignupPage = () => {
  return (
    <main className={styles["main"]}>
      <h1>Registrate</h1>
      <SignupForm />
    </main>
  )
}

export default SignupPage