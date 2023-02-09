import { useEffect, useState } from "react";
import Card from "./Card";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";
import img13 from "../images/13.jpg";
import img14 from "../images/14.jpg";
import img15 from "../images/15.jpg";
import img16 from "../images/16.jpg";

function CardsContainer() {
    const [itemsArray, setItemsArray] = useState([
        {
            name: "Sandy Cheeks",
            image: img1,
            wasClicked: "notclicked",
        },
        {
            name: "Mrs. Puff",
            image: img2,
            wasClicked: "notclicked",
        },
        {
            name: "SpongeBob Squarepants",
            image: img3,
            wasClicked: "notclicked",
        },
        {
            name: "Anchovies",
            image: img4,
            wasClicked: "notclicked",
        },
        {
            name: "Eugene H. Krabs",
            image: img5,
            wasClicked: "notclicked",
        },
        {
            name: "Pearl Krabs",
            image: img6,
            wasClicked: "notclicked",
        },
        {
            name: "Potty the Parrot",
            image: img7,
            wasClicked: "notclicked",
        },
        {
            name: "Flying Dutchman",
            image: img8,
            wasClicked: "notclicked",
        },
        {
            name: "Larry Lobster",
            image: img9,
            wasClicked: "notclicked",
        },
        {
            name: "Patrick Star",
            image: img10,
            wasClicked: "notclicked",
        },
        {
            name: "Squidward Tentacles",
            image: img11,
            wasClicked: "notclicked",
        },
        {
            name: "Squilliam Fancyson",
            image: img12,
            wasClicked: "notclicked",
        },
        {
            name: "Gary the Snail",
            image: img13,
            wasClicked: "notclicked",
        },
        {
            name: "Karen Plankton",
            image: img14,
            wasClicked: "notclicked",
        },
        {
            name: "Sheldon J. Plankton",
            image: img15,
            wasClicked: "notclicked",
        },
        {
            name: "Patchy the Pirate",
            image: img16,
            wasClicked: "notclicked",
        },
    ]);

    function shuffleArray(array) {
        let newArray = [...array];

        for (let i = 15; i >= 1; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }

        return newArray;
    }

    useEffect(() => {
        const cards = document.querySelectorAll(".card");

        let areAllClicked = true;

        itemsArray.forEach((item) => {
            if (areAllClicked === false) return;

            if (item.wasClicked === "notclicked") areAllClicked = false;
        });

        if (areAllClicked) {
            const itemsArrayCopy = [...itemsArray];

            itemsArrayCopy.forEach((item) => (item.wasClicked = "notclicked"));

            setItemsArray(itemsArrayCopy);
        }

        function markAsClicked(card) {
            const itemsArrayCopy = [...itemsArray];

            itemsArrayCopy.forEach((item) => {
                if (card.id === item.name && item.wasClicked === "notclicked")
                    item.wasClicked = "clicked";
                else if (
                    card.id === item.name &&
                    item.wasClicked === "clicked"
                ) {
                    itemsArrayCopy.forEach(
                        (item) => (item.wasClicked = "notclicked")
                    );
                }
            });

            setItemsArray(itemsArrayCopy);
        }

        function shuffleItemsArray() {
            setItemsArray(shuffleArray(itemsArray));
        }

        function markAndShuffle() {
            markAsClicked(this);
            shuffleItemsArray();
        }

        cards.forEach((card) => {
            card.addEventListener("click", markAndShuffle);
        });

        return function cleanup() {
            cards.forEach((card) => {
                card.removeEventListener("click", markAndShuffle);
            });
        };
    }, [itemsArray]);

    return (
        <div className="cardscontainer">
            <Card
                image={itemsArray[0].image}
                name={itemsArray[0].name}
                wasClicked={itemsArray[0].wasClicked}
            />
            <Card
                image={itemsArray[1].image}
                name={itemsArray[1].name}
                wasClicked={itemsArray[1].wasClicked}
            />
            <Card
                image={itemsArray[2].image}
                name={itemsArray[2].name}
                wasClicked={itemsArray[2].wasClicked}
            />
            <Card
                image={itemsArray[3].image}
                name={itemsArray[3].name}
                wasClicked={itemsArray[3].wasClicked}
            />
            <Card
                image={itemsArray[4].image}
                name={itemsArray[4].name}
                wasClicked={itemsArray[4].wasClicked}
            />
            <Card
                image={itemsArray[5].image}
                name={itemsArray[5].name}
                wasClicked={itemsArray[5].wasClicked}
            />
            <Card
                image={itemsArray[6].image}
                name={itemsArray[6].name}
                wasClicked={itemsArray[6].wasClicked}
            />
            <Card
                image={itemsArray[7].image}
                name={itemsArray[7].name}
                wasClicked={itemsArray[7].wasClicked}
            />
            <Card
                image={itemsArray[8].image}
                name={itemsArray[8].name}
                wasClicked={itemsArray[8].wasClicked}
            />
            <Card
                image={itemsArray[9].image}
                name={itemsArray[9].name}
                wasClicked={itemsArray[9].wasClicked}
            />
            <Card
                image={itemsArray[10].image}
                name={itemsArray[10].name}
                wasClicked={itemsArray[10].wasClicked}
            />
            <Card
                image={itemsArray[11].image}
                name={itemsArray[11].name}
                wasClicked={itemsArray[11].wasClicked}
            />
            <Card
                image={itemsArray[12].image}
                name={itemsArray[12].name}
                wasClicked={itemsArray[12].wasClicked}
            />
            <Card
                image={itemsArray[13].image}
                name={itemsArray[13].name}
                wasClicked={itemsArray[13].wasClicked}
            />
            <Card
                image={itemsArray[14].image}
                name={itemsArray[14].name}
                wasClicked={itemsArray[14].wasClicked}
            />
            <Card
                image={itemsArray[15].image}
                name={itemsArray[15].name}
                wasClicked={itemsArray[15].wasClicked}
            />
        </div>
    );
}

export default CardsContainer;
