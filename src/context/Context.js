import React, { useState, useEffect } from 'react'
const Context = React.createContext()
const API_KEY = 'AIzaSyC0FcCo8sHAyVThSnjOuny03SoW4unJhcg'


function ContextProvider({ children }) {

    const [allBooks, setAllBooks] = useState(JSON.parse(localStorage.getItem('books')) || [])

    function authenticate() {
        return gapi.auth2.getAuthInstance()
            .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
            .then(function () { console.log("Sign-in successful"); },
                function (err) { console.error("Error signing in", err); });
    }

    function loadClient() {
        gapi.client.setApiKey(API_KEY);
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function () { console.log("GAPI client loaded for API"); },
                function (err) { console.error("Error loading GAPI client for API", err); });
    }
    // Make sure the client is loaded and sign-in is complete before calling this method.
    function execute() {
        return gapi.client.youtube.channels.list({
            "part": [
                "snippet,contentDetails, status"
            ],
            "forUsername": "audiobook"
        })
            .then(function (response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
            },
                function (err) { console.error("Execute error", err); });
    }

    return (
        <Context.Provider value={''}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }