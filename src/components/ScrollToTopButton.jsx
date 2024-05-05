import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from "@heroicons/react/24/outline";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`h-12 w-12 fixed bottom-4 right-5 z-10 bg-blue-500 text-white px-4 py-2 rounded-full transition-opacity duration-300 ${isVisible ? 'opacity-90' : 'opacity-0 pointer-events-none'} flex items-center justify-center`}
      onClick={scrollToTop}
    >
      <span className="flex items-center justify-center">
      <ChevronUpIcon className="w-6 h-auto" />
      </span>
      
    </button>
  );
};

export default ScrollToTopButton;
