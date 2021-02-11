import React from "react";
import Hint from "../../assests/icons/hint.png";
import Arrow from "../../assests/icons/arrow.png";

import { motion } from "framer-motion";

const chapter = (props) => {
  let _continue = null;
  if (props.id === props.current_chapter) {
    _continue = (
      <motion.div whileHover={{ scale: 1.2 }} className="topic-btn">
        Continue
      </motion.div>
    );
  } else if (props.id < props.current_chapter) {
    _continue = (
      <motion.div whileHover={{ scale: 1.2 }} className="topic-btn">
        View
      </motion.div>
    );
  }
  var t = 0;
  const topics = props.topic_list.map((topic) => {
    t = t + 1;
    return (
      <li key={t} className="topic">
        {topic}
      </li>
    );
  });

  const showTopic = (event) => {
    const topic = event.target.parentElement;
    topic.children[0].classList.toggle("rotate-arrow");
    topic.children[1].classList.toggle("show-topics");
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: props.delay }}
      className="chapter"
      style={{ background: props.color }}
    >
      <div className="chapter-name">
        {props.name} <img src={Hint} alt="" />
      </div>
      <div onClick={showTopic} className="chapter-topic">
        Topics : {props.topics}
      </div>
      <ul className="topic-list">{topics}</ul>
      {_continue}
    </motion.div>
  );
};

export default chapter;
