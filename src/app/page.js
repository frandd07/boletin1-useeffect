"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";

export default function Home() {
  return (
    <div className={styles.page}>
      <Ejercicio1/>
      
      <Ejercicio3/>
    </div>
  );
}
