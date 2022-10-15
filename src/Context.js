import React, { useState, useEffect } from 'react'
const Context = React.createContext()
const API_KEY = 'AIzaSyCUqW35ETfgIPfO1spHfgD7IkpJwgK5CzE'


function ContextProvider({ children }) {

    const [allBooks, setAllBooks] = useState(JSON.parse(localStorage.getItem('books')) || [])



    // useEffect(() => {
        
    // }, [])


    return (
        <Context.Provider value={''}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }