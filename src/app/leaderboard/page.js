'use client'
import { useSession } from "@/hooks/useSession"
import Link from "next/link"
import styles from './page.module.css'


export default function Leaderboard() {
    const { session } = useSession()

    return(
        <>
            <Link href="/game" style={{textDecoration: 'none'}}>
                <h2>Volver</h2>
            </Link>
            <h1>Ranking</h1>
            <div className={styles.leaderboard}>
            {
                session.leaderboard &&
                session.leaderboard.map((element, index) => {
                    return (
                        <div className={styles.leaderboardItem} key={index}>
                            <h3>{element.name}</h3>
                            <h3>{element.score}</h3>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}