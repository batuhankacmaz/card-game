import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectPlayerPoint, selectPlayerBonus } from '../../app/cardSlice';
import '../../assets/styles/HeaderStyle.scss';

function Header() {
  const playerPoint = useAppSelector(selectPlayerPoint);
  const playerBonus = useAppSelector(selectPlayerBonus);
  return (
    <div className="header">
      <span className="header_text">Your point {playerPoint}</span>
      <span className="header_text">Bonus {playerBonus - 1}</span>
    </div>
  );
}

export default Header;
