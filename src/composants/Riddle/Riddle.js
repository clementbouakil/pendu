import React from "react";

const Riddle = ({ value }) => {
    return (
        <div className="riddle jumbotron mt-3">
            <p>{value}</p>
        </div>
    );
};

export default Riddle;
