import React, { Component } from "react";

import "./App.css";

const autoBind = require("auto-bind");

class App extends Component {
    constructor() {
        super();
        autoBind(this);
    }

    render() {
        return (
            <div className="container">
                <h1>Jeu du pendu</h1>
            </div>
        );
    }
}

export default App;
