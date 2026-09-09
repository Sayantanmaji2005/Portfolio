import { useCallback } from 'react';

const useSoundEffects = () => {
  const playHover = useCallback(() => {}, []);
  const playClick = useCallback(() => {}, []);

  return { playHover, playClick };
};

export default useSoundEffects;

