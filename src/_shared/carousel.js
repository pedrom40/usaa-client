import React from 'react';

export function Carousel(props) {

  const cards = props.cards.map( (card, index) =>
    <div key={index}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <div>
        <div>
          <button onClick={e => props.onButton1Click(e)}>{card.button1}</button>
          <button onClick={e => props.onButton2Click(e)}>{card.button2}</button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {cards}
    </div>
  );
}