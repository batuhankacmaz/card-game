import React from 'react';
import '../../assets/styles/HeaderStyle.scss';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

function Header({ point }: { point: number }) {
  return (
    <div className="header">
      <span className="header_text">Your point {point}</span>
      <AiOutlineQuestionCircle className="information" />
    </div>
  );
}

export default Header;
