import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

import "./App.css";

function App() {
  const [content, setContent] = useState(null);
  const [cards, setCards] = useState([{ content: "test", id: 0 }]);

  const addCards = () => {
    setCards(() => {});
  };

  const handleClick = ({ target }) => {
    setContent(target.value);
  };

  return (
    <>
      <List cards={cards} content={content} />
    </>
  );
}

const List = ({ cards }) => {
  return (
    <div className="List">
      {cards.map((card) => (
        <Card content={card.content} key={card.id} />
      ))}
    </div>
  );
};

const Card = ({ content }) => {
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        <p className="exit">❌</p>
        <p className="content">{content}</p>
      </div>
    </Draggable>
  );
};

export default App;
