
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import  List  from '../List';
import { favoritesActions } from '../../store/favorites';
import { Provider } from 'react-redux';

function Service() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const loadDetails = (items) => {
    const promises = items.map((item) => {
      return fetch(item.url).then((response) => response.json())
    });
    Promise.all(promises)
      .then((data) => {
        setItems(data);
      });
  }

  useEffect(() => {
    // Inicialização
    const localData = localStorage.getItem('react-redux');
    if (localData) {
        const parsed = JSON.parse(localData);
        const { favorites } = parsed;
        dispatch(favoritesActions.init(favorites));
    }

    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
          return response.json();
      })
      .then((data) => {
        const { results } = data;
        loadDetails(results);
      })
      .catch(() => {
        console.error('Error');
      });
  }, [dispatch]);

  return (
    
    <div>
        
         <List items={items} />
      
    </div>
  );
}

export default Service;
