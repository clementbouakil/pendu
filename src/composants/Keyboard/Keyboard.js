import React from "react";

import Key from "./Key";

const Keyboard = ({ array }) => (
    <div className="keyboard p-4 border">
        {array.map((letter, index) => (
            <Key key={index} value={letter} />
        ))}
    </div>
);

export default Keyboard;
