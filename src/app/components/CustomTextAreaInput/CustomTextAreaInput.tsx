import React from 'react'
import styles from "./CustomTextAreaInput.module.css"
import globalStyles from "../../globalStyles/InputStyles.module.css"

type CustomAreaInputProps = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function CustomAreaTextInput({label, value, onChange}: CustomAreaInputProps) {
  

  return (
    <div className={styles.wrapper}>
      <label className={styles.textAreaLabel} htmlFor="title">{label}</label>
      <textarea onChange={onChange} value={value} className={`${styles.textArea} ${globalStyles.inputShadow}`} name="post" id="post"></textarea>
    </div>
  )
}
