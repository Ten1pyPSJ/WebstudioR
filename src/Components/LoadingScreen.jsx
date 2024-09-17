import React, { useEffect, useState } from 'react';
import style from './LoadingScreen.module.css';

function LoadingScreen({ onLoaded }) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
      setTimeout(onLoaded, 1000); // Переход после задержки в 1 секунду
    }, 3000); // Продолжительность показа логотипа 3 секунды

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className={`${style.loadingScreen} ${isLoadingComplete ? style.hidden : ''}`}>
      <div className={style.logo}>2xbyte</div>
    </div>
  );
}

export default LoadingScreen;