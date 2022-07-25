import styled from 'styled-components';

const MainWrapperDiv = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--gray300);

  &::before,
  &::after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 50px;
    background: var(--primary300);
  }

  &::after {
    top: initial;
    bottom: 0;
  }
`;

export default MainWrapperDiv;
