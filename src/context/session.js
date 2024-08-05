'use client'
import { useFlags } from "@/hooks/useFlags"
import { createContext, useEffect, useState } from "react"

export const SessionContext = createContext()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const initialLeaderboard = [{name: "Nombre", score: "Puntaje"}]

export function SessionProvider ({children}) {
    const { flags, fetchFlags } = useFlags()
    const [session, setSession] = useState({
        username: '',
        leaderboard: initialLeaderboard,
        score: 0,
        current: 0,
        country: null,
        flags: []
    })

    useEffect(() => {
        setSession((prevSession) => ({
            ...prevSession,
            leaderboard: JSON.parse(localStorage.getItem('leaderboard')) || initialLeaderboard,
            username: localStorage.getItem('username') || ''
        }));
    }, [])

    useEffect(() => {
        if (flags && flags.length > 0) {
            setSession((prevSession) => ({
                ...prevSession,
                country: flags[getRandomInt(flags.length)],
                flags: flags
            }));
        }    
    }, [flags])

    const resetGame = async () => {
        setSession((prevSession) => ({
            ...prevSession,
            score: 0,
            current: 0,
            country: "",
            flags: []
        }));

        await fetchFlags();

        setSession((prevSession) => ({
            ...prevSession,
            flags: flags
        }));
    }

    const nextCountry = () => {
        if (session.flags.length === 0) return;
        setSession((prevSession) => ({...prevSession, country: prevSession.flags[getRandomInt(prevSession.flags.length)]}));
    };

    const deleteGuess = (country) => {
        setSession((prevSession) => ({...prevSession, flags: prevSession.flags.filter((flag, _) => flag.name !== country.name)}))
        nextCountry();
    };

    const changeUsername = (newUser) => {
        window.localStorage.setItem('username', newUser)
        setSession((prevSession) => ({...prevSession, username: newUser}))
    }

    const changeScore = (newScore) => {
        setSession((prevSession) => ({
            ...prevSession,
            current: prevSession.current + 1,
            score: prevSession.score + newScore
        }));
    }

    const changeLeaderboard = (newName, newScore) => {
        if(session.leaderboard.length >= 10 && session.leaderboard[session.leaderboard.length - 1].score < newScore) {
            setSession((prevSession) => ({...prevSession, leaderboard: [...prevSession.leaderboard, {name: newName, score: newScore}].sort((a, b) => b.score - a.score).slice(0, 10)}))
        }
        else if(session.leaderboard.length < 10) {
            setSession((prevSession) => ({...prevSession, leaderboard: [...prevSession.leaderboard, {name: newName, score: newScore}].sort((a, b) => b.score - a.score)}))
        }
        window.localStorage.setItem('leaderboard', JSON.stringify(session.leaderboard))
    }

    const hasFinished = () => {
        if(session.flags) {
            return session.current === 10;
        }
        return false
    }

    return (
        <SessionContext.Provider value={{
            session,
            changeUsername,
            changeScore,
            changeLeaderboard,
            deleteGuess,
            hasFinished,
            resetGame
        }}>
            {children}
        </SessionContext.Provider>
    )
}