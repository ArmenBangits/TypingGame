import { convertTimer, useKeyboardPress } from '@games/helpers';
import { Button } from '@games/ui-kit';
import { useEffect, useMemo, useRef, useState } from 'react';
import { GameOver, MainWrapper } from '../components';
import { GAME_CONFIG } from '../constants';
import { FallingLetterContainer } from '../containers';
import { useAppDispatch, useAppSelector } from '../store';
import {
  addRandomLetter,
  resetGameState,
  selectLetters,
  selectLostCount,
  selectScore,
  typeLetter,
} from '../store/game';

const GamePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [isGameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(GAME_CONFIG.GAME_SESSION_SECOND);

  const letters = useAppSelector(selectLetters);
  const lifeLostCount = useAppSelector(selectLostCount);
  const score = useAppSelector(selectScore);

  const dispatch = useAppDispatch();

  const convertedTime = useMemo(() => convertTimer(time), [time]);

  useKeyboardPress(char => dispatch(typeLetter(char)));

  useEffect(() => {
    dispatch(addRandomLetter());

    const intervalId = setInterval(
      () => dispatch(addRandomLetter()),
      GAME_CONFIG.LETTER_ADD_INTERVAL_MS,
    );

    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    const checkContainerHeight = () =>
      setContainerHeight(
        (containerRef.current?.offsetHeight || 0) -
          GAME_CONFIG.TOP_BAR_HEIGHT * 2,
      );

    window.addEventListener('resize', checkContainerHeight);

    checkContainerHeight();

    const timeInterval = setInterval(
      () =>
        setTime(prevTime => {
          if (prevTime === 1) clearInterval(timeInterval);

          return prevTime - 1;
        }),
      1000,
    );

    return () => {
      window.removeEventListener('resize', checkContainerHeight);
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    setGameOver(lifeLostCount > GAME_CONFIG.LIFE_COUNT || time === 0);
  }, [lifeLostCount, time]);

  return (
    <>
      <MainWrapper
        showLife
        lifeCount={GAME_CONFIG.LIFE_COUNT}
        lifeLostCount={lifeLostCount || 0}
        showTimer
        showTotalScore
        timer={convertedTime}
        totalScore={score}
        ref={containerRef}
      >
        {letters.map(({ golden, letter, x }) => (
          <FallingLetterContainer
            golden={golden}
            x={x}
            containerHeight={containerHeight || 0}
            key={letter}
          >
            {letter}
          </FallingLetterContainer>
        ))}
      </MainWrapper>

      {isGameOver && (
        <GameOver>
          GAME OVER
          <span>Total Score - {score}</span>
          <Button
            type="button"
            onClick={() => {
              setGameOver(false);

              setTime(GAME_CONFIG.GAME_SESSION_SECOND);

              dispatch(resetGameState());
            }}
          >
            Start again
          </Button>
        </GameOver>
      )}
    </>
  );
};

export default GamePage;
