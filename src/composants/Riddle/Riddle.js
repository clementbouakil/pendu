import React from "react";

import "./Riddle.css";

const HIDDEN_SYMBOL = "_";

const Riddle = ({ value, feedback }) => (
    <input
        type="button"
        className="btn btn-outline-dark m-2"
        value={feedback === "hidden" ? HIDDEN_SYMBOL : value.toUpperCase()}
        disabled
    />
);

export default Riddle;
