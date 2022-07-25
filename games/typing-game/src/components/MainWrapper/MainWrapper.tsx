import { forwardRef, PropsWithChildren } from 'react';
import LifeContainer from './LifeContainer';
import LifeItem from './LifeItem';
import MainWrapperDiv from './MainWrapperDiv';
import Timer from './Timer';
import TotalScore from './TotalScore';

export interface MainWrapperProps {
  showLife?: boolean;
  showTotalScore?: boolean;
  showTimer?: boolean;
  lifeCount?: number;
  lifeLostCount?: number;
  totalScore?: number;
  timer?: string;
}

const MainWrapper = forwardRef<
  HTMLDivElement,
  PropsWithChildren<MainWrapperProps>
>(
  (
    {
      children,
      lifeCount,
      totalScore,
      timer,
      showLife,
      showTotalScore,
      lifeLostCount,
      showTimer,
    },
    ref,
  ) => {
    return (
      <MainWrapperDiv ref={ref}>
        {showTotalScore && (
          <TotalScore>Total Score: {totalScore || 0}</TotalScore>
        )}

        {children}

        {showLife && lifeCount ? (
          <LifeContainer>
            {new Array(lifeCount).fill(null).map((_, index) => (
              <LifeItem
                broken={
                  (lifeLostCount && lifeCount - (index + 1) < lifeLostCount) ||
                  false
                }
              />
            ))}
          </LifeContainer>
        ) : null}

        {showTimer && <Timer>{timer}</Timer>}
      </MainWrapperDiv>
    );
  },
);

export default MainWrapper;
