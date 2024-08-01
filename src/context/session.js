'use client'
import { createContext, useState } from "react"

export const SessionContext = createContext()

const setNewLeaderboard = (leaderboard) => {
    localStorage.setItem('leaderboard', leaderboard)
}

const initialLeaderboard = localStorage.getItem('leaderboard') || []

export function SessionProvider ({children}) {
    const [session, setSession] = useState({
        username: '',
        leaderboard: initialLeaderboard,
        score: 0
    })

    const changeUsername = (newUser) => {
        localStorage.setItem('username', newUser)
        setSession((prevSession) => ({...prevSession, username: newUser}))
    }

    const changeScore = (score) => {
        setSession((prevSession) => ({...prevSession, score: score}))
    }

    const changeLeaderboard = (leader) => {
        setSession((prevSession) => ({...prevSession, leaderboard: leader}))
        setNewLeaderboard(leader)
    }

    return (
        <SessionContext.Provider value={{
            session,
            changeUsername,
            changeScore,
            changeLeaderboard
        }}>
            {children}
        </SessionContext.Provider>
    )
}