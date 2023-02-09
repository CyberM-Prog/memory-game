import { useEffect, useState } from "react";

function Score() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        const cards = document.querySelectorAll(".card");

        function incrementScore() {
            setScore(score + 1);
        }

        cards.forEach((card) => {
            card.addEventListener("click", () => {
                if (card.classList[1] === "notclicked") incrementScore();
            });
        });

        return function cleanup() {
            cards.forEach((card) => {
                card.removeEventListener("click", () => {
                    if (card.classList[1] === "notclicked") incrementScore();
                });
            });
        };
    });

    return (
        <div className="score">
            <h2>Score: {score}</h2>
            <h2>High Score: {highScore}</h2>
        </div>
    );
}

export default Score;
