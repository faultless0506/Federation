import { useState, useEffect } from 'react';
import './ButtonScrollToTop.scss';

export default function ButtonScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <>
      <div
        className={`button__scroll ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      ></div>
    </>
  );
}
