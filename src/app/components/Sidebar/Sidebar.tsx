"use client"
import React from 'react'
import Link from "next/link";
import styles from "./Sidebar.module.css";
import { useSidebar } from '@/app/Context/SidebarContext';

export default function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <ul className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <li className={styles.sidebarLink}>
        <Link href="/feed">Feed</Link>
      </li>
      <li className={styles.sidebarLink}>
        <Link href="/events">Events</Link>
      </li>
      <li className={styles.sidebarLink}>
        <Link href="/chats">Chats</Link>
      </li>
      <li className={styles.sidebarLink}>
        <Link href="/groups">Groups</Link>
      </li>
      <li className={styles.sidebarLink}>
        <Link href="/profile">Profile</Link>
      </li>
    </ul>
  );
}
