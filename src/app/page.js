"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";
import Ejercicio4 from "./Ejercicio4";
import Ejercicio5 from "./Ejercicio5";
import Ejercicio6 from "./Ejercicio6";
import Ejercicio7 from "./Ejercicio7";

export default function Home() {
  return (
    <div className={styles.page}>
      <Ejercicio1/>
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      <Ejercicio5/> 
      <Ejercicio6/>
      <Ejercicio7/>
    </div>
  );
}
