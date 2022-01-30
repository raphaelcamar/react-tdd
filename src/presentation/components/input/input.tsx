import React, { InputHTMLAttributes } from 'react'
import Styles from './input-styles.scss'

type Props = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const enableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}

export default Input
