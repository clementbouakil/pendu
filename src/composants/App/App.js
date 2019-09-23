import React, { Component } from "react";

import "./App.css";
import Keyboard from "../Keyboard/Keyboard";
import GuessCount from "../GuessCount/GuessCount";
import Riddle from "../Riddle/Riddle";

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

const riddles = ["nourriture", "poisson", "pomme", "banane", "clown"];

class App extends Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            guesses: 0,
            riddle: this.generateRandomRiddle(),
            feedback: "hidden"
        };
    }

    generateRandomRiddle = () => {
        const result = riddles[Math.floor(Math.random() * riddles.length)];
        const riddle = result.split("");
        return riddle;
    };

    render() {
        const { guesses, riddle, feedback } = this.state;
        return (
            <div className="container flex-centered">
                <h1>Jeu du pendu</h1>
                <div className="flex-centered jumbotron border">
                    {riddle.map((letter, index) => (
                        <Riddle value={letter} key={index} feedback={feedback} />
                    ))}
                </div>
                <GuessCount guesses={guesses} />
                <Keyboard array={letters} />
            </div>
        );
    }
}

export default App;
