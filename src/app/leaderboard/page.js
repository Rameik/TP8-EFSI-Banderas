'use client'
import { useSession } from "@/hooks/useSession"
import Link from "next/link"


export default function Leaderboard() {
    const { session } = useSession()

    return(
        <>
            <Link href="/game" style={{textDecoration: 'none'}}>
                <h2>Volver</h2>
            </Link>
            <div className="leaderboard">
            {
                session.leaderboard.map((element) => {
                    return (
                        <>
                            <div>
                                <h3>{element.name}</h3>
                            </div>
                            <div>
                                <h3>{element.score}</h3>
                            </div>
                        </>
                    )
                })
            }
                
            </div>
        </>
    )
}