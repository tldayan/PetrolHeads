import React from 'react'
import styles from "./CustomTextInput.module.css"
import globalStyles from "../../globalStyles/InputStyles.module.css"

type CustomInputProps = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomTextInput({label,value,onChange}: CustomInputProps) {
  

  return (
    <div className={styles.textInputContainer}>
      <label className={styles.textInputLabel} htmlFor="title">{label}</label>
      <input onChange={onChange} value={value} className={`${styles.textInput} ${globalStyles.inputShadow}`} id="title" type="text" />
    </div>
  )
}
