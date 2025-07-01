import type { InputHTMLAttributes, } from "react"
import styles from '@/shared/components/Input/input.module.css'
import clsx from "clsx"
export interface InputProps extends 

InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
}

export const InputPassword = ({ placeholder, ...rest }: InputProps) => {
  return (
    <input className={clsx(styles["input"])} type="password" placeholder={placeholder} {...rest} />
  )
}