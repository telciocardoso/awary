import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import { useState } from "react";

function Card() {
  const[texto, setColor] = useState('');
  return (
    <div className="card">

                <div className="card-header">
                        Sales
                </div>
                <div className="card-body">
                        <h2><center>USD 150K</center></h2>
                </div>
                <div className="card-footer">
                <h4><center>Product</center></h4>
                </div>
                

        
    </div>

  );
}

export default Card;