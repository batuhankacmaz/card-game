import React, { ReactNode, useState, useEffect } from 'react';
import '../../assets/styles/CardListStyle.scss';
import Card from '../Card/Card';
import Rick from '../../assets/images/rick_sanchez.png';
import data from '../../data/rick-and-morty.json';

/*{
    "id": 1,
    "name": "Rick Sanchez",
    "value": "Rick",
    "imgUrl": "../assets/images/rick_sanchez.png",
    "isOpen": false,
    "isFound": false
  }, */
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
  const [rickAndMorty, rickAndMortySet] = useState<RickAndMorty[]>([...data]);

  /* useEffect(() => {
    fetch('../../data/rick-and-morty.json')
      .then((response) => response.text())
      .then((data: RickAndMorty[]) => rickAndMortySet(data));
  }, []); */
  return (
    <div>
      <List
        items={rickAndMorty}
        render={(item: RickAndMorty) => (
          <Card title={item.name} imgUrl={item.imgUrl} isOpen={item.isOpen} />
        )}
      />
    </div>
  );
}

export default CardList;
