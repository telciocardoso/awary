import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import { useState } from "react";

function Card() {
  const[texto, setColor] = useState('');
  return (
    <div className="card">
      <div className={texto} onClick={() => setColor('texto')}>
        Indicadores <br/>
      </div>
    </div>

  );
}

export default Card;