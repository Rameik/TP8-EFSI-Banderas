'use client'
import styles from "./page.module.css";
import Controller from "@/components/Controller";
import Image from "next/image";
import Header from "@/components/Header";
import { useSession } from "@/hooks/useSession";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Bottom from "@/components/Bottom";


export default function Game() {
  const router = useRouter();
  const { session, hasFinished, changeLeaderboard } = useSession()

  useEffect(() => {
    if(hasFinished()) {
      changeLeaderboard(session.username, session.score)
      router.push("/winner")
    }
  }, [hasFinished, router, changeLeaderboard, session.username, session.score])

  return (
    <>
      <Header/>
      <div className={styles.main}>
        <h1>Adiviná la bandera!</h1>
        {
          session.country && <Image src={session.country.flag} width={500} height={500} alt={session.country.name}/>
        }
        <Controller country={session.country} />
      </div>
      <Bottom/>
    </>
  );
}
