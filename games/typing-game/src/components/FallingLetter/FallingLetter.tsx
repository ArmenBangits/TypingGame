import { Typography, TypographyProps } from '@games/ui-kit';
import { FC, useRef } from 'react';
import styled from 'styled-components';

export interface FallingLetterProps extends TypographyProps {
  top?: number;
  x?: number;
  golden?: boolean;
  hide?: boolean;
  containerHeight?: number;
}

const FallingLetterStyles = styled(Typography)<Omit<FallingLetterProps, 'top'>>`
  position: absolute;
  top: 0;

  ${props => props.hide && 'opacity: 0;'}

  ${props => `color: ${props.golden ? 'var(--warning300)' : 'var(--black)'}`};

  font-size: 35px;
  margin: 0;

  transition: opacity 0.3s;
  will-change: transform;

  @keyframes waver {
    100% {
      transform: translate3d(6vw, 0, 0);
    }
  }

  animation: waver 2s infinite alternate ease-in-out;
`;

const FallingLetterContainerStyles = styled(Typography)<
  Pick<FallingLetterProps, 'top' | 'x'>
>`
  position: absolute;
  top: 0;
  left: ${props => `calc(${props.x || 0}% - 100px)`};
  transform: ${props => `translateY(${props.top || 0}px) translateX(-50%)`};
  will-change: transform;
  transition: all 0.3s;
`;

const FallingLetter: FC<FallingLetterProps> = ({ top = 0, x, ...props }) => {
  const letterRef = useRef<HTMLSpanElement>(null);

  return (
    <FallingLetterContainerStyles as="span" top={top} x={x} ref={letterRef}>
      <FallingLetterStyles {...props} as="span" />
    </FallingLetterContainerStyles>
  );
};

export default FallingLetter;
