import React from 'react';
import Contador from '../hojas-de-estilo/Contador';

function Contador ({ numClics }) {
  return (
    <div className='Contador'>
      {numClics}
    </div>
  );
}

export default Contador;