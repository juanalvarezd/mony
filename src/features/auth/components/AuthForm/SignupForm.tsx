import FormGroup from "@/shared/components/FormGroup/FormGroup"
import { Input } from "@/shared/components/Input/Input"
import { InputPassword } from "@/shared/components/Input/InputPassword"
import Button from "@/shared/components/Button/Button"
import styles from "@/features/auth/components/AuthForm/form.module.css"
import { Link } from "react-router-dom"
const SignupForm = () => {
  return (
    <form className={styles["form"]}>
      <FormGroup as={Input} type="text" id="name" label="Nombre" placeholder="Ingrese su nombre" />
      <FormGroup as={Input} type="email" id="email" label="Email" placeholder="Ingrese su correo" />
      <FormGroup as={InputPassword} type="password" id="password" label="Cree una contraseña" minLength={8} placeholder="Contraseña" />
      <Button type="submit" variant="dark" size="btnW100">Registrate</Button>
      <p className={styles["authCta"]}>¿Ya tenes una cuenta? <Link to={"/login"} className={styles["linkCta"]}> Iniciar sesión</Link></p>
    </form>
  )
}

export default SignupForm