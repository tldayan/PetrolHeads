"use client"
import React, { useState } from 'react'
import styles from "./Header.module.css";
import Hambuger from '../Hamburger/Hambuger';

export default function Header() {

  return (
    <header className={styles.header}>
      <Hambuger />
      <h1>PetrolHeads</h1>
    </header>
  )
}
