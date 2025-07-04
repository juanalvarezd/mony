import { Link } from "react-router-dom"
import Button from "@/shared/components/Button/Button"
import FormGroup from "@/shared/components/FormGroup/FormGroup"
import { Input } from "@/shared/components/Input/Input"
import { InputPassword } from "@/shared/components/Input/InputPassword"
import styles from "@/features/auth/components/AuthForm/form.module.css"


const LoginForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.info("yendo")
  }

  return (
    <form onSubmit={handleSubmit} className={styles["form"]}>
      <FormGroup as={Input} type="email" placeholder="ejemplo@mail.com" label="Correo" id="email" />
      <FormGroup  as={InputPassword} placeholder="Ingrese su contraseña" label="Contraseña" id="password" minLength={8} />
      <Button type="submit" size="btnW100" variant="dark" >Iniciar sesión</Button>
      <p className={styles["authCta"]}>¿Necesitas crear una cuenta? <Link className={styles["linkCta"]} to={"/signup"}>Registrate</Link></p>
    </form>
  )
}

export default LoginForm