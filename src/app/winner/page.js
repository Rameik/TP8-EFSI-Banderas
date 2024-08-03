'use client'
import { useSession } from "@/hooks/useSession";
import Link from "next/link";

export default function Winner() {
    const { resetGame } = useSession()

    return (
        <div className="winner">
            <h1>¡Ganaste!</h1>
            <Link href="/game" style={{textDecoration: 'none'}} onClick={resetGame}>
                <h2>Volver a jugar</h2>
            </Link>
        </div>
    )
}