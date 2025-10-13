import './App.css'
import axios from "axios";
import {useEffect} from "react";

function App() {

    function login() {
        const host: string = window.location.host === "localhost:5173" ?
            "http://localhost:8080" : window.location.origin;
        window.open(host + '/oauth2/authorization/github', '_self');
    }

    const loadUser = () => {
        axios.get('/api/auth/me')
            .then(response => {
                console.log(response.data)
            })
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <>
            <h1>DevOps - Dockerfile</h1>
            <button onClick={login}>Login</button>
        </>
    )
}

export default App
