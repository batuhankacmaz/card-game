import React from 'react';
import '../../assets/styles/ModalStyle.scss';

function Modal() {
  const handleRefresh = function () {
    location.reload();
  };
  return (
    <>
      <div className="darkBG" />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">GAME IS FINISHED!!</h5>
          </div>
          <div className="modalContent">Do you want to play again?</div>
          <div className="modalActions">
            <button className="refresh" onClick={handleRefresh}>
              Restart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
