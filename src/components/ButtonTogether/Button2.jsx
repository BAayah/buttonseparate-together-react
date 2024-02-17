import React from 'react'


export function Button2({ count, onClick }) {
  return (
    <button onClick={onClick}>
        Clicked {count} times
    </button>
  );
}


