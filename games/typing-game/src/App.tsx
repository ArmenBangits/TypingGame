import { GlobalStyles } from '@games/ui-kit';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { GamePage, HomePage } from './pages';
import { store } from './store';

const App = () => {
  const [isGameStarted, setGameStarted] = useState(false);

  return (
    <Provider store={store}>
      {isGameStarted ? (
        <GamePage />
      ) : (
        <HomePage onStartGame={() => setGameStarted(true)} />
      )}

      <GlobalStyles />
    </Provider>
  );
};

export default App;
