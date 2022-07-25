import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
  }

  html {
    --white: #fff;
    --black: #000;
    --primary300: #3b95c9;
    --primary400: #3081b0;
    --gray300: #ededed;
    --warning300: #e0b81f;
    --danger300: #f42a2a;
    --default-transition-duration: 0.3s;
  }
`;
