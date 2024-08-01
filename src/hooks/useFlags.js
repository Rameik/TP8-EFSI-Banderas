'use client'
import { useState, useEffect } from "react"

export function useFlags () {
    const [ flags, setFlags ] = useState()

    useEffect(() => {
        fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`)
            .then(res => res.json())
            .then(response => {
                setFlags(response.data)
            })
    }, [])

    return { flags }
}