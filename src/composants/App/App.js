import React, { Component } from "react";

import "./App.css";
import Keyboard from "../Keyboard/Keyboard";
import GuessCount from "../GuessCount/GuessCount";
import Riddle from "../Riddle/Riddle";

const autoBind = require("auto-bind");

class App extends Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            guesses: 0,
            riddle: ""
        };
    }

    render() {
        const { guesses, riddle } = this.state;
        return (
            <div className="container flex-centered">
                <h1>Jeu du pendu</h1>
                <Riddle value={riddle} />
                <GuessCount guesses={guesses} />
                <Keyboard />
            </div>
        );
    }
}

export default App;
