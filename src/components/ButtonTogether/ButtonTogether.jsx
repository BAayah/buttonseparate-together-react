import React, { useState } from 'react'
import { Button2 } from './Button2';

export function ButtonTogether() {
   const [count, setCount] = useState(0);

   function handleClick() {
    setCount(count + 1);
   }

    return (
    <div>
      <h2>Counters that update together</h2>
      <Button2 count={count} onClick={handleClick} />
      <Button2 count={count} onClick={handleClick} />
    </div>
  )
}


