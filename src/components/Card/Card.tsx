import React from 'react';
import '../../assets/styles/CardStyle.scss';
import { BsQuestionDiamondFill } from 'react-icons/bs';
import { showCard, selectDisabledMode } from '../../app/cardSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

function Card({
  id,
  title,
  imgUrl,
  isOpen,
}: {
  id: number;
  title?: string;
  imgUrl: string;
  isOpen?: boolean;
}) {
  const isDisabled = useAppSelector(selectDisabledMode);
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    if (isOpen === true || isDisabled === true) return;
    dispatch(showCard(id));
  };
  return (
    <div className="card" onClick={() => handleClick(id)}>
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
