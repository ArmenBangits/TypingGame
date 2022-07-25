import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LETTERS } from '../../constants';
import { RootState } from '../store';

const initialState = {
  showedLetters: [] as {
    letter: string;
    x: number;
    golden: boolean;
  }[],
  letters: LETTERS,
  lifeLostCount: 0,
  score: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addRandomLetter(state) {
      if (!state.letters.length) return

      const randomLetterIndex = Math.round(
        Math.random() * (state.letters.length - 1),
      );

      const randomLetter = state.letters[randomLetterIndex];

      state.showedLetters.push({
        letter: randomLetter,
        golden: Math.round(Math.random() * 10) < 2,
        // X position from 0 to 100%
        x: Math.round(Math.random() * 100)
      });

      state.letters = state.letters.filter(letter => letter !== randomLetter);
    },
    typeLetter(state, action: PayloadAction<string>) {
        const validLetter = state.showedLetters.find(({ letter }) => letter.toLowerCase() === action.payload.toLowerCase());

        if (validLetter) {
            state.showedLetters = state.showedLetters.filter(({letter}) => validLetter.letter !== letter)

            state.score += validLetter.golden ? 5 : 1;

            return
        }
    },
    removeLetter(state, action: PayloadAction<string>) {
        state.showedLetters = state.showedLetters.filter(({ letter }) => letter !== action.payload);

        state.lifeLostCount += 1
    },
    resetGameState(state) {
      state.showedLetters = initialState.showedLetters;
      state.lifeLostCount = initialState.lifeLostCount;
      state.score = initialState.score;
      state.letters = initialState.letters;
    }
  },
});

export const { addRandomLetter, typeLetter, removeLetter, resetGameState } = gameSlice.actions;

export const selectLetters = (state: RootState) => state.game.showedLetters;
export const selectLostCount = (state: RootState) => state.game.lifeLostCount;
export const selectScore = (state: RootState) => state.game.score;

export default gameSlice.reducer;
