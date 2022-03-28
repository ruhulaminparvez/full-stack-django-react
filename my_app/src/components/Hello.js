import React from 'react';

function Hello() {

  function clickHandler() {
    alert('You clicked function component!');
  }

  return (

        <button className='btn btn-primary' onClick={clickHandler}>Click Me Inside Function</button>
  
  );
}


export default Hello;