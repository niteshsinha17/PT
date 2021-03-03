import React, {Component} from "react";

import Card from "./Utils/Card";
import KBC from "../../assests/images/kbc.jpeg";
import "./Games.css";
class Games extends Component {
  state = {
    games: [
      {
        name: "KBC",
        slug: "kbc",
        img: KBC,
      },
      {
        name: "KBC",
        slug: "kbc",
        img: KBC,
      },
      {
        name: "KBC",
        slug: "kbc",
        img: KBC,
      },
      {
        name: "KBC",
        slug: "kbc",
        img: KBC,
      },
      {
        name: "KBC",
        slug: "kbc",
        img: KBC,
      },
      {
        name: "KBC",
        slug: "kbc",
        img: KBC,
      },
    ],
  };
  render() {
    const games = this.state.games.map((game) => {
      return <Card key={game.slug} name={game.name} img={game.img} />;
    });
    return (
      <div>
        <h2>Available Games</h2>
        <div className="games">{games}</div>
      </div>
    );
  }
}

export default Games;
