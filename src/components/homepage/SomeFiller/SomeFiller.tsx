import React from 'react';

export const SomeFiller = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
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
      <div>Części 13456 +</div>
      <img
        style={{
          borderRadius: 50,
        }}
        src="https://via.placeholder.com/110x35"
      />
      <div>Kominki grzewcze 13456 +</div>
      <img
        style={{
          borderRadius: 50,
        }}
        src="https://via.placeholder.com/110x35"
      />
      <div>Kominki ozdobne 13456 +</div>
      <img
        style={{
          borderRadius: 50,
        }}
        src="https://via.placeholder.com/110x35"
      />
      <div>Części 13456 +</div>
    </div>
  );
};
