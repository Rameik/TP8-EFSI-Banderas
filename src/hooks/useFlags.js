'use client'

import { useState, useEffect } from "react";

const shuffle = (array) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
}; 

export function useFlags () {
    const [ flags, setFlags ] = useState()

    const fetchFlags = async () => {
        try {
            const response = await fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`);
            const data = await response.json();
            const shuffledFlags = shuffle(data.data).slice(0, 10);
            setFlags(shuffledFlags);
        } catch (error) {
            console.error('Error fetching flags:', error);
        }
    };

    useEffect(() => {
        fetchFlags();
    }, []);

    return { flags, fetchFlags } 
}