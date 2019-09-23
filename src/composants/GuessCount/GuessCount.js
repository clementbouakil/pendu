import React from "react";

const GuessCount = ({ guesses }) => (
    <div className="guesses alert alert-info">
        Nombre de tentatives : {guesses}
    </div>
);

export default GuessCount;
