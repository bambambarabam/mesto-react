import React from 'react';

function Card({ onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="element">
      <img
        className="element__img element__img_add element__img_preview"
        src={card.link}
        alt={`${card.name}`}
        onClick={handleClick}
      />
      <button
        className="element__del"
        aria-label="Удалить"
        type="button"
      />
      <h2 className="element__header element__header_add">{card.name}</h2>
      <div className="element__fav-container">
        <button
          className="element__fav"
          aria-label="В избранное"
          type="button"
        />
        <p className="element__fav-count">{card.likes.length}</p>
      </div>
    </div>

  )
}

export default Card;