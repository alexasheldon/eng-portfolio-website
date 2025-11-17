import React from 'react';

const ToTop: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible ? (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          padding: '10px 15px',
          fontSize: '18px',
          borderRadius: '5px',
          backgroundColor: '#555',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        <i className="fa fa-chevron-up"></i>
      </button>
    ) : null
  );
};

export default ToTop;