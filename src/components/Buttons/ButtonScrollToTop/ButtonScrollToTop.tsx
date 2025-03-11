import { useState, useEffect } from 'react';
import './ButtonScrollToTop.scss';

export default function ButtonScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Функция для прокрутки страницы наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Отслеживание прокрутки страницы
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Очистка слушателя событий при размонтировании компонента
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
    
  return (
    <>
      
        <div className={`button__scroll ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        </div>
    </>
  );
}