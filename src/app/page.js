'use client'
import { useSession } from "@/hooks/useSession";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { changeUsername } = useSession();

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username } = Object.fromEntries(new FormData(e.target))
    
    if(username){
      changeUsername(username)
      router.push('/game')
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem('username')) {
      router.push('/game');
    }
  }, [router]);

  return (
    <main className={styles.main}>
      <h1>Ingresá tu nombre</h1>
      <form onSubmit={handleSubmit} className={styles.controller}>
        <input type="text" className={styles.controllerInput} name='username'/>
        <button className={styles.controllerButton}>Enviar</button>
      </form>
    </main>
  );
}
