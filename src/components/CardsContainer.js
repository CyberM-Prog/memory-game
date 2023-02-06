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
    return (
        <div className="cardscontainer">
            <Card image={img1} name="Sandy Cheeks" />
            <Card image={img2} name="Mrs. Puff" />
            <Card image={img3} name="SpongeBob Squarepants" />
            <Card image={img4} name="Anchovies" />
            <Card image={img5} name="Eugene H. Krabs" />
            <Card image={img6} name="Pearl Krabs" />
            <Card image={img7} name="Potty the Parrot" />
            <Card image={img8} name="Flying Dutchman" />
            <Card image={img9} name="Larry Lobster" />
            <Card image={img10} name="Patrick Star" />
            <Card image={img11} name="Squidward Tentacles" />
            <Card image={img12} name="Squilliam Fancyson" />
            <Card image={img13} name="Gary the Snail" />
            <Card image={img14} name="Karen Plankton" />
            <Card image={img15} name="Sheldon J. Plankton" />
            <Card image={img16} name="Patchy the Pirate" />
        </div>
    );
}

export default CardsContainer;
