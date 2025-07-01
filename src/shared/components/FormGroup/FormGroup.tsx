import { Input } from "@/shared/components/Input/Input"
type InputProps = React.ComponentProps<typeof Input>
import styles from "@/shared/components/FormGroup/formGroup.module.css"

interface FormGroupProps extends InputProps {
  label: string,
  as?: React.ElementType
}

const FormGroup = ({ label, as: Component = Input, ...rest }: FormGroupProps) => {
  return (
    <div className={styles["formGroup"]}>
      <label htmlFor={rest.id}>{label}</label>
      <Component {...rest} />
    </div>
  )
}

export default FormGroup