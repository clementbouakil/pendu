import React from "react";

const GuessCount = ({ guesses }) => (
    <div className="guesses alert alert-info">
        Nombre de tentative : {guesses}
    </div>
);

export default GuessCount;
