import React, { useEffect } from 'react';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  selectIsFinished,
  selectFoundedCards,
  selectCards,
  finishGame,
} from './app/cardSlice';
import './App.scss';

function App() {
  const isGameFinished = useAppSelector(selectIsFinished);
  const foundedCards = useAppSelector(selectFoundedCards);
  const totalCards = useAppSelector(selectCards);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (totalCards.length === foundedCards) {
      dispatch(finishGame());
    }
  }, [dispatch, foundedCards]);
  return (
    <div className="App">
      <Header />
      <CardList />

      {isGameFinished && <Modal />}
    </div>
  );
}

export default App;
