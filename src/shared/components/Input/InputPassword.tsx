import type { InputHTMLAttributes, } from "react"
import styles from '@/shared/components/Input/input.module.css'
import clsx from "clsx"
import { BsEye } from "react-icons/bs";

export interface InputProps extends
  InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
}

export const InputPassword = ({ placeholder, ...rest }: InputProps) => {
  return (
    <div>
      <div className={styles["inputWrapper"]}>
        <input className={clsx(styles["input"], styles["inputPassword"])} type="password" placeholder={placeholder} {...rest} />
        <BsEye className={styles["BsEye"]}/>
      </div>
      <span className={styles["inputInfo"]}>La contraseña debe tener al menos 8 caracteres</span>
    </div>)
}



