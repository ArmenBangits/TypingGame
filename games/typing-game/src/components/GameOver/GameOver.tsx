import { Typography } from '@games/ui-kit';
import styled from 'styled-components';

const GameOver = styled(Typography)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;

  position: fixed;
  top: 0px;
  left: 0px;

  background-color: var(--white);

  width: 100%;
  height: 100%;

  color: var(--black);

  font-size: 50px;

  span {
    margin: 15px 0;
  }
`;

export default GameOver;
