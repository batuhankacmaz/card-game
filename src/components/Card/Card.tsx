import React from 'react';
import '../../assets/styles/CardStyle.scss';

import { BsQuestionDiamondFill } from 'react-icons/bs';

function Card({
  title,
  imgUrl,
  isOpen,
}: {
  title?: string;
  imgUrl: string;
  isOpen?: boolean;
}) {
  return (
    <div className="card">
      {isOpen ? (
        <>
          <img className="card_image" src={imgUrl} />
          <span className="card_text">{title}</span>
        </>
      ) : (
        <BsQuestionDiamondFill className="card_icon" />
      )}
    </div>
  );
}

export default Card;
