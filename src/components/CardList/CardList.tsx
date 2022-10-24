import React, { ReactNode, useEffect } from 'react';
import Card from '../Card/Card';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  freezeGame,
  matchCards,
  selectCards,
  selectedCards,
} from '../../app/cardSlice';
import '../../assets/styles/CardListStyle.scss';

interface RickAndMorty {
  id: number;
  name: string;
  value: string;
  imgUrl: string;
  isOpen: boolean;
  isFound: boolean;
}

function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <div>
      <ul className="card_list">
        {items.map((item, index) => (
          <li key={index}>{render(item)}</li>
        ))}
      </ul>
    </div>
  );
}

function CardList() {
  const cards = useAppSelector(selectCards);
  const currentSelectedCards = useAppSelector(selectedCards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentSelectedCards.length === 2) {
      dispatch(freezeGame());
      setTimeout(() => {
        dispatch(matchCards());
      }, 600);
    }
  }, [dispatch, currentSelectedCards]);

  return (
    <div>
      <List
        items={cards}
        render={(item: RickAndMorty) => (
          <Card
            id={item.id}
            title={item.name}
            imgUrl={item.imgUrl}
            isOpen={item.isOpen}
          />
        )}
      />
    </div>
  );
}

export default CardList;
