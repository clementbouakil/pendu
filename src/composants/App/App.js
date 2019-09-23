import React, { Component } from "react";

import "./App.css";
import Keyboard from "../Keyboard/Keyboard";
import GuessCount from "../GuessCount/GuessCount";

const autoBind = require("auto-bind");

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
                <Keyboard />
            </div>
        );
    }
}

export default App;
