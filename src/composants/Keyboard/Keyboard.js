import React from "react";

const Keyboard = ({ value }) => (
    <input
        type="button"
        value={value.toUpperCase()}
        className="btn btn-info m-1"
    />
);

export default Keyboard;
