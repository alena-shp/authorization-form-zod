import $ from './styles.module.scss'
import {UseFormRegisterReturn} from 'react-hook-form'

type TField = "username" | 'email' | "password" | "confirmPassword"

type TProps = Readonly<{
  type: string
  id: string
  label: string
  placeholder: string
  register: UseFormRegisterReturn<TField>
  isError: boolean
  errorMessage?: string
}>

export const Field = ({
  type,
  id,
  label,
  errorMessage,
  placeholder,
  isError,
  register,
}: TProps) => {
  return (
    <div className={$.field}>
      <label htmlFor={id} className={$.label}>
        {label}
      </label>
      <input
        {...register}
        type={type}
        id={id}
        className={$.input}
        placeholder={placeholder}
        aria-invalid={isError ? 'true' : 'false'}
      />
      <span role='alert' className={$.error}>
        {errorMessage}
      </span>
    </div>
  )
}
