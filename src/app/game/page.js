'use client'
import styles from "./page.module.css";
import { useFlags } from "@/hooks/useFlags";
import Controller from "@/components/Controller";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Game() {
  const { country } = useFlags()

  return (
    <div className={styles.main}>
        <h1>Adiviná la bandera!</h1>
        {
          country && <Image src={country.flag} width={500} height={500} alt={country.name}/>
        }
        <Controller country={country}></Controller>
    </div>
  );
}
