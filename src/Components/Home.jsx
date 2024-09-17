import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import style from './Home.module.css';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isLoaded ? 'transparent' : 'black';
  }, [isLoaded]);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onLoaded={handleLoaded} />}
      {isLoaded && (
        <div className={style.glav}>
          <div className="container">
            <div className={style.multipleLines}>
            <div className={style.line1}>
            <div className={style.an_line1_1}>
              <span className={style.multipleRotate}>2</span>
              <span className={style.multipleRotate}>X</span>
              <span className={style.multipleRotate}>B</span>
              <span className={style.multipleRotate}>Y</span>
              <span className={style.multipleRotate}>T</span>
              <span className={style.multipleRotate}>E</span>
            </div>
            <div className={style.an_line1_2}>
              <span className={style.multipleRotate}>W</span>
              <span className={style.multipleRotate}>E</span>
              <span className={style.multipleRotate}>B</span>
              <span className={style.multipleRotate}>-</span>
              <span className={style.multipleRotate}>Д</span>
              <span className={style.multipleRotate}>И</span>
              <span className={style.multipleRotate}>З</span>
              <span className={style.multipleRotate}>А</span>
              <span className={style.multipleRotate}>Й</span>
              <span className={style.multipleRotate}>Н</span>
            </div>
          </div>
          
          <div className={style.line2}>
            <div className={style.an_line2_1}>
              <span className={style.multipleRotate}>С</span>
              <span className={style.multipleRotate}>А</span>
              <span className={style.multipleRotate}>Й</span>
              <span className={style.multipleRotate}>Т</span>
            </div>
            <div className={style.an_line2_2}>
              <span className={style.multipleRotate}>П</span>
              <span className={style.multipleRotate}>О</span>
              <span className={style.multipleRotate}>Д</span>
            </div>
            <div className={style.an_line2_3}>
              <span className={style.multipleRotate}>К</span>
              <span className={style.multipleRotate}>Л</span>
              <span className={style.multipleRotate}>Ю</span>
              <span className={style.multipleRotate}>Ч</span>
            </div>
            <div className={style.an_line2_4}>
              <span className={style.multipleRotate}>S</span>
              <span className={style.multipleRotate}>E</span>
              <span className={style.multipleRotate}>O</span>
            </div>
          </div>

          <div className={style.line3}>
              <span className={style.multipleRotate}>3</span>
              <span className={style.multipleRotate}>Д</span>
              <span className={style.multipleRotate}>-</span>
              <span className={style.multipleRotate}>В</span>
              <span className={style.multipleRotate}>И</span>
              <span className={style.multipleRotate}>З</span>
              <span className={style.multipleRotate}>У</span>
              <span className={style.multipleRotate}>А</span>
              <span className={style.multipleRotate}>Л</span>
              <span className={style.multipleRotate}>И</span>
              <span className={style.multipleRotate}>З</span>
              <span className={style.multipleRotate}>А</span>
              <span className={style.multipleRotate}>Ц</span>
              <span className={style.multipleRotate}>И</span>
              <span className={style.multipleRotate}>Я</span>
          </div>

          <div className={style.line4}>
            <div className={style.an_line4_1}>
              <span className={style.multipleRotate}>Л</span>
              <span className={style.multipleRotate}>И</span>
              <span className={style.multipleRotate}>Ч</span>
              <span className={style.multipleRotate}>Н</span>
              <span className={style.multipleRotate}>Ы</span>
              <span className={style.multipleRotate}>Е</span>
            </div>
            <div className={style.an_line4_2}>
              <span className={style.multipleRotate}>К</span>
              <span className={style.multipleRotate}>А</span>
              <span className={style.multipleRotate}>Б</span>
              <span className={style.multipleRotate}>И</span>
              <span className={style.multipleRotate}>Н</span>
              <span className={style.multipleRotate}>Е</span>
              <span className={style.multipleRotate}>Т</span>
              <span className={style.multipleRotate}>Ы</span>
            </div>
          </div>

          <div className={style.line5}>
            <div className={style.an_line5_1}>
              <span className={style.multipleRotate}>П</span>
              <span className={style.multipleRotate}>Л</span>
              <span className={style.multipleRotate}>А</span>
              <span className={style.multipleRotate}>Г</span>
              <span className={style.multipleRotate}>И</span>
              <span className={style.multipleRotate}>Н</span>
              <span className={style.multipleRotate}>Ы</span>
              <span className={style.multipleRotate}>М</span>
              <span className={style.multipleRotate}>Е</span>
              <span className={style.multipleRotate}>Р</span>
              <span className={style.multipleRotate}>Ч</span>
            </div>
            <div className={style.an_line5_2}>
              <span className={style.multipleRotate}>Q</span>
              <span className={style.multipleRotate}>U</span>
              <span className={style.multipleRotate}>I</span>
              <span className={style.multipleRotate}>Z</span>
            </div>
              
              
          </div>

          <div className={style.line6}>
              <span className={style.multipleRotate}>С</span>
              <span className={style.multipleRotate}>Е</span>
              <span className={style.multipleRotate}>Р</span>
              <span className={style.multipleRotate}>В</span>
              <span className={style.multipleRotate}>И</span>
              <span className={style.multipleRotate}>С</span>
              <span className={style.multipleRotate}>Ы</span>
              <span className={style.multipleRotate}>Р</span>
              <span className={style.multipleRotate}>Е</span>
              <span className={style.multipleRotate}>К</span>
              <span className={style.multipleRotate}>Л</span>
              <span className={style.multipleRotate}>А</span>
              <span className={style.multipleRotate}>М</span>
              <span className={style.multipleRotate}>А</span>
          </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;