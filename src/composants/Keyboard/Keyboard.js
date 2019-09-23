import React from "react";

import Key from "./Key";

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

const Keyboard = () => (
    <div className="keyboard p-4 border">
        {letters.map((letter, index) => (
            <Key key={index} value={letter} />
        ))}
    </div>
);

export default Keyboard;
