'use client'

import { useState, useEffect } from "react";

const shuffle = (array) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
}; 

export function useFlags () {
    const [ flags, setFlags ] = useState()

    useEffect(() => {
        fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`)
            .then(res => res.json())
            .then(response => {
                const shuffledFlags = shuffle(response.data).slice(0, 2);
                setFlags(shuffledFlags)
            })
    }, [])

    return { flags } 
}