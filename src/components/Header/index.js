'use client'
import { useSession } from "@/hooks/useSession"
import styles from './styles.module.css'

export default function Header() {
    const { session } = useSession()

    return(
        <div className={styles.header}>
            <h2>{session.username}</h2>
            <h1>{session.flags && `${session.current}/${20}`}</h1>
            <h2>Puntaje: {session.score}</h2>
        </div>
    )
}