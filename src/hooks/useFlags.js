'use client'
import { useState, useEffect } from "react"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function useFlags () {
    const [ country, setCountry ] = useState()

    useEffect(() => {
        fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`)
            .then(res => res.json())
            .then(response => {
                const randomIndex = getRandomInt(response.data.length);
                setCountry(response.data[randomIndex]);
            })
    }, [])

    return { country }
}