import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "@/shared/components/Button/button.module.css"
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "light" | "dark"
  size?: "btnW100" | "btnSm" | "btnMd" | "btnLg"
  children?: ReactNode
}


export default function Button({ variant = "dark", size = "btnMd", children, ...props }: Props) {

  return <button className={clsx(styles.btn, styles[variant], styles[size])} {...props}>{children}</button>

}