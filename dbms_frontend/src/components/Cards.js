import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Collections!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="Experience the class of Mercedes with 4L-V8 Twin-turbo engine"
              label="Mercedes Benz"
              path="http://127.0.0.1:8000/buy-benz"
            />
            <CardItem
              src="https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="Until you've been on a Harley-Davidson, you haven't been on a motorcycle"
              label="Harley Davidson"
              path="http://127.0.0.1:8000/buy-harley"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.hdqwalls.com/download/porsche-911-turbo-s-exclusive-series-2017-sm-1366x768.jpg"
              text="Their Turbo engines are special for reasons best known to them"
              label="Porsche"
              path="http://127.0.0.1:8000/buy-porsche"
            />
            <CardItem
              src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?cs=srgb&dl=pexels-adrian-dorobantu-2127733.jpg&fm=jpg"
              text="Wander the Trails with its build to last quality"
              label="Lamborghini"
              path="http://127.0.0.1:8000/buy-lamborghini"
            />
            <CardItem
              src="https://wallpapercave.com/wp/wp4221540.jpg"
              text="Explore this amazing parallel Twin with madening 47HP"
              label="Royal Enfield"
              path="http://127.0.0.1:8000/buy-royal"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
