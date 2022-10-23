import React from 'react';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header point={10} />
      <CardList />
    </div>
  );
}

export default App;
