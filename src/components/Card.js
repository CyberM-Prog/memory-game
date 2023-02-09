function Card(props) {
    return (
        <div className={`card ${props.wasClicked}`} id={props.name}>
            <img src={props.image} alt=""></img>
            <p>{props.name}</p>
        </div>
    );
}

export default Card;
