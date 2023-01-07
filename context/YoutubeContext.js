
import React, { useState, useEffect, useContext, createContext } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const Context = createContext()

export const YoutubeContext = ({ children }) => {
    const [books, setBooks] = useState([])
    const { data, error } = useSWR('api/youtube', fetcher)
    // console.log(...data)
    useEffect(() => {
        // setBooks(JSON.parse(localStorage.getItem('books')) || useSWR('api/youtube', fetcher).data)
        // const { data, error } = useSWR('api/youtube', fetcher)
        // getBooksByChannel('UCLDmlMl7949IhVDWBjF-rVA')
    }, [])

    const getBooksByChannel = (channel) => {
        if (localData.length === 0) {
            if (error) {
                console.log(error)
            }
            setBooks(data.items)
            localStorage.setItem('books', JSON.stringify(data))
        } else {
            setBooks(localData)
        }
    }

    return (
        <Context.Provider value={ data }>
            {children}
        </Context.Provider >

    )
}

export const useYoutubeContext = () => useContext(Context)