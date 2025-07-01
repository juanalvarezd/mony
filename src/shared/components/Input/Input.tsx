import type { InputHTMLAttributes, } from "react"
import styles from '@/shared/components/Input/input.module.css'
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
}

export const Input = ({ type = "text", placeholder, ...rest }: InputProps) => {
  return (
    <input className={styles["input"]} type={type} placeholder={placeholder} {...rest} />
  )
}