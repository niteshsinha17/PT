import React from "react";
import {motion} from "framer-motion";
const card = (props) => {
  return (
    <div>
      <div className="game">
        <img src={props.img} alt="" />
        <div className="game-detail">
          <div className="game-name">{props.name}</div>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            onClick={props.clicked}
          >
            PLAY
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default card;
