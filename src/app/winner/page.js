'use client'
import { useSession } from "@/hooks/useSession";
import Link from "next/link";

export default function Winner() {
    const { resetGame, session } = useSession()

    return (
        <div className="winner">
            <h1>¡El juego terminó!</h1>
            <h2>Puntaje final: {session.score}</h2>
            <Link href="/game" style={{textDecoration: 'none'}} onClick={resetGame}>
                <h2>Volver a jugar</h2>
            </Link>
        </div>
    )
}