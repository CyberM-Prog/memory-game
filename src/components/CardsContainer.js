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
        },
        {
            name: "Mrs. Puff",
            image: img2,
        },
        {
            name: "SpongeBob Squarepants",
            image: img3,
        },
        {
            name: "Anchovies",
            image: img4,
        },
        {
            name: "Eugene H. Krabs",
            image: img5,
        },
        {
            name: "Pearl Krabs",
            image: img6,
        },
        {
            name: "Potty the Parrot",
            image: img7,
        },
        {
            name: "Flying Dutchman",
            image: img8,
        },
        {
            name: "Larry Lobster",
            image: img9,
        },
        {
            name: "Patrick Star",
            image: img10,
        },
        {
            name: "Squidward Tentacles",
            image: img11,
        },
        {
            name: "Squilliam Fancyson",
            image: img12,
        },
        {
            name: "Gary the Snail",
            image: img13,
        },
        {
            name: "Karen Plankton",
            image: img14,
        },
        {
            name: "Sheldon J. Plankton",
            image: img15,
        },
        {
            name: "Patchy the Pirate",
            image: img16,
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

        function shuffleItemsArray() {
            setItemsArray(shuffleArray(itemsArray));
        }

        cards.forEach((card) =>
            card.addEventListener("click", shuffleItemsArray)
        );

        return function cleanup() {
            cards.forEach((card) =>
                card.removeEventListener("click", shuffleItemsArray)
            );
        };
    });

    return (
        <div className="cardscontainer">
            <Card image={itemsArray[0].image} name={itemsArray[0].name} />
            <Card image={itemsArray[1].image} name={itemsArray[1].name} />
            <Card image={itemsArray[2].image} name={itemsArray[2].name} />
            <Card image={itemsArray[3].image} name={itemsArray[3].name} />
            <Card image={itemsArray[4].image} name={itemsArray[4].name} />
            <Card image={itemsArray[5].image} name={itemsArray[5].name} />
            <Card image={itemsArray[6].image} name={itemsArray[6].name} />
            <Card image={itemsArray[7].image} name={itemsArray[7].name} />
            <Card image={itemsArray[8].image} name={itemsArray[8].name} />
            <Card image={itemsArray[9].image} name={itemsArray[9].name} />
            <Card image={itemsArray[10].image} name={itemsArray[10].name} />
            <Card image={itemsArray[11].image} name={itemsArray[11].name} />
            <Card image={itemsArray[12].image} name={itemsArray[12].name} />
            <Card image={itemsArray[13].image} name={itemsArray[13].name} />
            <Card image={itemsArray[14].image} name={itemsArray[14].name} />
            <Card image={itemsArray[15].image} name={itemsArray[15].name} />
        </div>
    );
}

export default CardsContainer;
