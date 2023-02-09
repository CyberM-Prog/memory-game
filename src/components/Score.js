import { useEffect, useState } from "react";

function Score() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        const cards = document.querySelectorAll(".card");

        function incrementScore() {
            setScore(score + 1);
        }

        function adjustScore() {
            if (this.classList[1] === "notclicked" && score === 15) {
                setHighScore(16);
                setScore(0);
            } else if (this.classList[1] === "notclicked") incrementScore();
            else {
                if (score > highScore) setHighScore(score);
                setScore(0);
            }
        }

        cards.forEach((card) => {
            card.addEventListener("click", adjustScore);
        });

        return function cleanup() {
            cards.forEach((card) => {
                card.removeEventListener("click", adjustScore);
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
