import React, { Component } from "react";

import "./App.css";
import Keyboard from "../Keyboard/Keyboard";

const autoBind = require("auto-bind");

const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

class App extends Component {
    constructor() {
        super();
        autoBind(this);
    }

    render() {
        return (
            <div className="container flex-centered">
                <h1>Jeu du pendu</h1>
                <div className="container-keyboard flex-centered">
                    {letters.map((letter, index) => (
                        <Keyboard key={index} value={letter} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
