
import { useEffect, useState, useContext } from 'react';
import MyContext from '../../contexts/myContext';


function List () {
  const {items} = useContext(MyContext)

    
    return (
        <div>
          
          {items.map((item, i) => {
            return (
              <div key={i}>
                <p><img alt={item.name} className="list-item-image" src="" /> {item.name}</p>
            
              </div>
            );
          })}
        </div>
      );
}

export default List;
