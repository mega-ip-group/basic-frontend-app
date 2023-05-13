import {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, setMessage] = useState("");
    const dadJokes = () => {
        fetch('/test-api/test-method')
            .then(message => {
                // console.log(message.json())
                return message.json();
            }).then(data=>{
                console.log(data)
        });
    };

    useEffect(() => {
        console.log("stam")
        dadJokes();
    })
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {message}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
