import ListItem from '../ListItem';


function List( {items}) {
    
    return (
        <div>
          
          {items.map((item, i) => {
            return (
              <div key={i}>
                <p><img alt={item.name} className="list-item-image" src={item.sprites.other['official-artwork'].front_default} /> {item?.name}</p>
            
              </div>
            );
          })}
        </div>
      );
}

export default List;
