import type { InputHTMLAttributes, } from "react"
import styles from '@/shared/components/Input/input.module.css'
import clsx from "clsx"
export interface InputProps extends

  InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
}

export const InputPassword = ({ placeholder, ...rest }: InputProps) => {
  return (
    <div>
      <input className={clsx(styles["input"], styles["inputPassword"])} type="password" placeholder={placeholder} {...rest} />
      <span className={styles["inputInfo"]}>La contraseña debe tener al menos 8 caracteres</span>
    </div>)
}