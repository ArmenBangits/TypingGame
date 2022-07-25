import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { FallingLetter, FallingLetterProps } from '../../components';
import { GAME_CONFIG } from '../../constants';
import { useAppDispatch } from '../../store';
import { removeLetter } from '../../store/game';

export interface FallingLetterContainerProps
  extends Omit<FallingLetterProps, 'top'> {}

const FallingLetterContainer: FC<
  PropsWithChildren<FallingLetterContainerProps>
> = props => {
  const { containerHeight, golden } = props;

  const [top, setTop] = useState(GAME_CONFIG.TOP_BAR_HEIGHT);

  const dispatch = useAppDispatch();

  const onBottom = useCallback(() => {
    dispatch(removeLetter(props.children?.toString() || ''));
  }, [dispatch, props.children]);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setTop(
          prevTop =>
            prevTop +
            (golden
              ? GAME_CONFIG.GOLDEN_LETTERS_DOWN_INTERVAL
              : GAME_CONFIG.LETTERS_DOWN_INTERVAL),
        ),
      GAME_CONFIG.LETTERS_DOWN_INTERVAL_MS,
    );

    return () => clearInterval(intervalId);
  }, [containerHeight, onBottom, golden]);

  useEffect(() => {
    if (containerHeight && top >= containerHeight) onBottom();
  }, [top, onBottom, containerHeight]);

  return <FallingLetter {...props} top={top} />;
};

export default FallingLetterContainer;
