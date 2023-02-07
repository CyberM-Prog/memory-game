function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt=""></img>
            <p>{props.name}</p>
        </div>
    );
}

export default Card;
