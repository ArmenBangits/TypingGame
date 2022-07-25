import styled from 'styled-components';

export interface TypographyProps {
  centered?: boolean;
}

const Typography = styled.p<TypographyProps>`
  margin: 15px 0;
  font-size: 14px;

  ${props => props.centered && 'text-align: center'}
`;

export default Typography;
