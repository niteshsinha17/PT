import React from "react";
import Dobereiner from "./Topics/Dobereiner";
import History from "./Topics/History";
import Introduction from "./Topics/Introduction";
import NewLand from "./Topics/Newland";
import Mendeleev from "./Topics/Mendeleev";
import Facts from "./Topics/Fact";
import Quize from "../../../containers/Quize/Quize";
import BasketGame from "../../../containers/Basket/BasketGame";

const evolution = (props) => {
  let topic = null;
  switch (props.match.params.topic) {
    case "history":
      topic = <History />;
      break;
    case "introduction":
      topic = <Introduction />;
      break;
    case "dobereiner":
      topic = <Dobereiner />;
      break;
    case "newland":
      topic = <NewLand />;
      break;
    case "mendeleev":
      topic = <Mendeleev />;
      break;
    case "facts":
      topic = <Facts />;
      break;
    case "game":
      topic = <BasketGame />;
      // topic = <Quize />;
      break;
    default:
      break;
  }
  return topic;
};

export default evolution;
