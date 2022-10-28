import React from 'react';
import Contador from '../hojas-de-estilo/Contador';

function Contador ({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );
}

export default Contador;