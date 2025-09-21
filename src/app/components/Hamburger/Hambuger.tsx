"use client";
import React from "react";
import styles from "./Hamburger.module.css";
import { useSidebar } from "@/app/Context/SidebarContext";

export default function Hamburger() {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <div
      className={`${styles["menu-link-wrapper"]} ${isOpen ? styles["menu-trigger-open"] : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles["menu-link"]}>
        <span className={styles["lines"]}></span>
      </div>
    </div>
  );
}
