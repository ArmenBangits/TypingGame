import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  min-width: 120px;
  min-height: 35px;
  border-radius: 20px;
  border: 2px solid var(--black);
  color: var(--black);

  padding: 0 20px;
  box-sizing: border-box;

  font: inherit;

  font-size: 14px;
  letter-spacing: 1px;

  cursor: pointer;

  transition: all var(--default-transition-duration);

  &:hover {
    color: var(--primary300);
    border-color: var(--primary300);
  }

  &:active {
    color: var(--primary400);
    border-color: var(--primary400);
  }
`;

export default Button;
