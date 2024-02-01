import { useEffect, useState } from 'react';

export const SomeFiller = () => {
  const [justifyContentCenter, setJustifyContentCenter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1096) {
        setJustifyContentCenter(true);
      } else {
        setJustifyContentCenter(false);
      }
    };

    handleResize(); // Sprawdzanie szerokości okna przy pierwszym renderowaniu

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        justifyContent: justifyContentCenter ? 'center' : 'flex-start',
        alignItems: 'center',
        gap: 30,
        display: 'inline-flex',
        textWrap: 'nowrap',
        overflow: 'hidden',
        overflowX: 'auto',
        margin: '20px 0',
        padding: '20px 15px',
        border: '1px solid rgba(64, 67, 84, 0.30)',
        borderLeft: 0,
        borderRight: 0,
      }}
    >
      <div>Części 156 +</div>
      <img
        style={{
          borderRadius: 50,
        }}
        src="https://via.placeholder.com/110x35"
      />
      <div>Kominki grzewcze 9345 +</div>
      <img
        style={{
          borderRadius: 50,
        }}
        src="https://via.placeholder.com/110x35"
      />
      <div>Kominki ozdobne 789 +</div>
      <img
        style={{
          borderRadius: 50,
        }}
        src="https://via.placeholder.com/110x35"
      />
      <div>Części 6 +</div>
    </div>
  );
};
