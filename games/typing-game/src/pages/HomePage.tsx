import { Button, Typography } from '@games/ui-kit';
import { FC } from 'react';
import { MainWrapper } from '../components';

export interface HomePageProps {
  onStartGame(): void;
}

const HomePage: FC<HomePageProps> = ({ onStartGame }) => {
  return (
    <MainWrapper>
      <Button type="button" onClick={onStartGame}>
        Start Game
      </Button>

      <Typography as="p" centered>
        Letters will fall... if you have a keyboard, <br /> press the correct
        key to knock it away before it hits the ground
      </Typography>
    </MainWrapper>
  );
};

export default HomePage;
