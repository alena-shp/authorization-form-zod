import { UseFormRegisterReturn } from 'react-hook-form'

import $ from './styles.module.scss'

type TProps = Readonly<{
  id: string
  register: UseFormRegisterReturn<'terms'>
  isError: boolean
  errorMessage?: string
}>

export const ConditionsField = ({ id, register, isError, errorMessage }: TProps) => {
  return (
    <div className={$.conditionsField}>
      <div className={$.row}>
        <input {...register} type="checkbox" id={id} className={$.checkbox} aria-invalid={isError ? 'true' : 'false'} />
        <label htmlFor={id} className={$.confirm}>
          I accept{' '}
          <a className={$.link} href="#">
            Terms and conditions
          </a>
        </label>
      </div>
      <span className={$.error}>{errorMessage}</span>
    </div>
  )
}
