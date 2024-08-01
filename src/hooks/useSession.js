'use client'
import { SessionContext } from "@/context/session"
import { useContext } from "react"

export function useSession () {
    const session = useContext(SessionContext)

    if(session == undefined) {
        throw new Error('useSession must be used within a SessionProvider')
    }

    return session
}