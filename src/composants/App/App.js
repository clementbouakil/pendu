import React, { Component } from "react";

import "./App.css";
import Keyboard from "../Keyboard/Keyboard";
import GuessCount from "../GuessCount/GuessCount";

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
        this.state = {
            guesses: 0
        };
    }

    render() {
        const { guesses } = this.state;
        return (
            <div className="container flex-centered">
                <h1>Jeu du pendu</h1>
                <GuessCount guesses={guesses} />
                <div className="flex-centered">
                    {letters.map((letter, index) => (
                        <Keyboard key={index} value={letter} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
