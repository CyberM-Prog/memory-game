import "./App.css";
import Score from "./components/Score";
import CardsContainer from "./components/CardsContainer";

function App() {
    return (
        <div className="App">
            <h1>Memory Game</h1>
            <h2>
                Score points by clicking on an image you haven't clicked before
            </h2>
            <Score />
            <CardsContainer />
        </div>
    );
}

export default App;
