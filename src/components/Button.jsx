import React from 'react';

export function Button({ children, ...props }) {
  return (
    <button style={{
      background: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: '0.6em 1.2em',
      fontSize: '1em',
      cursor: 'pointer',
      fontWeight: 500,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      transition: 'background 0.2s'
    }} {...props}>
      {children}
    </button>
  );
}

