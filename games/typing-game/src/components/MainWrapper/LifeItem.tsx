import { Icons } from '@games/ui-kit';
import { FC } from 'react';
import styled from 'styled-components';

const LifeItemStyles = styled.li<LifeItemProps>`
  width: 25px;
  margin-left: 10px;
  color: ${props => (props.broken ? 'var(--black)' : 'var(--danger300)')};
`;

export interface LifeItemProps {
  broken?: boolean;
}

const LifeItem: FC<LifeItemProps> = props => {
  const { broken } = props;

  return (
    <LifeItemStyles {...props}>
      {broken ? <Icons.HeartBrokenIcon /> : <Icons.HeartIcon />}
    </LifeItemStyles>
  );
};

export default LifeItem;
