import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { shuffle } from '../utils/shuffle';
import data from '../data/rick-and-morty.json';

interface RickAndMorty {
  id: number;
  name: string;
  value: string;
  imgUrl: string;
  isOpen: boolean;
  isFound: boolean;
}

interface CardGame {
  items: RickAndMorty[];
  playerPoints: number;
  foundedCards: number;
  selectedCards: RickAndMorty[];
  isDisabled: boolean;
  isFinished: boolean;
  streakBonus: number;
}
const randomData = shuffle(data);

const items: RickAndMorty[] = randomData;

// Define the initial state using that type
const initialState: CardGame = {
  items: items,
  playerPoints: 0,
  foundedCards: 0,
  selectedCards: [],
  isDisabled: false,
  isFinished: false,
  streakBonus: 1,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    showCard: (state, action) => {
      const id = action.payload;

      const selectedCard = state.items.find(
        (card: RickAndMorty) => card.id === id
      );

      if (selectedCard) {
        selectedCard.isOpen = !selectedCard.isOpen;
        state.selectedCards.push(selectedCard);
      }
    },
    freezeGame: (state) => {
      state.isDisabled = true;
    },
    matchCards: (state) => {
      const currentSelectedCards = state.selectedCards;

      if (currentSelectedCards[0].value === currentSelectedCards[1].value) {
        state.foundedCards += 2;
        state.playerPoints += state.streakBonus;
        state.streakBonus += 2;
        state.selectedCards = [];
        state.isDisabled = false;
      } else {
        const firstElement = state.items.find(
          (card: RickAndMorty) => card.id === currentSelectedCards[0].id
        );
        const secondElement = state.items.find(
          (card: RickAndMorty) => card.id === currentSelectedCards[1].id
        );
        if (firstElement && secondElement) {
          firstElement.isOpen = false;
          secondElement.isOpen = false;
          state.streakBonus = 1;
          state.selectedCards = [];
          state.isDisabled = false;
        }
      }
    },
    finishGame: (state) => {
      state.isFinished = true;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.playerPoints += action.payload;
    },
  },
});

export const {
  finishGame,
  freezeGame,
  matchCards,
  showCard,
  incrementByAmount,
} = cardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.card.playerPoints;
export const selectCards = (state: RootState) => state.card.items;
export const selectedCards = (state: RootState) => state.card.selectedCards;
export const selectDisabledMode = (state: RootState) => state.card.isDisabled;
export const selectPlayerPoint = (state: RootState) => state.card.playerPoints;
export const selectPlayerBonus = (state: RootState) => state.card.streakBonus;
export const selectIsFinished = (state: RootState) => state.card.isFinished;
export const selectFoundedCards = (state: RootState) => state.card.foundedCards;
export default cardSlice.reducer;
