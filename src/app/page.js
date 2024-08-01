'use client'
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username } = Object.fromEntries(new FormData(e.target))
    
    if(username){
      console.log(username)
      router.push('/game')
    }
  }

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
