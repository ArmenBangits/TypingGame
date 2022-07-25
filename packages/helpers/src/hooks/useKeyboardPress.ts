import { useEffect } from 'react';

export const useKeyboardPress = (cb: (char: string) => void) => {
  useEffect(() => {
    const onPress = (e: KeyboardEvent) => {
      const char = e.key;

      if (char.length === 1) cb(char.toLowerCase());
    };

    document.body.addEventListener('keypress', onPress);

    return () => document.body.removeEventListener('keypress', onPress);
  }, []);
};
