'use client'
import Link from "next/link"
import styles from './styles.module.css'

export default function Side() {
    const handleLogout = () => {
        localStorage.removeItem('username');
    };

    return (
        <div className={styles.side}>
            <Link href="/leaderboard" style={{textDecoration: 'none'}}>
                <h2>Tablero historico</h2>
            </Link>
            <Link href="/" style={{textDecoration: 'none'}} onClick={handleLogout}>
                <h2>Cambiar nombre</h2>
            </Link>
        </div>
    )
}