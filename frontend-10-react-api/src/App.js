import logo from './logo.svg';
import './App.css';
import List from './components/List'
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then(function (response) {
    // handle success
    console.log(response);
    
    setItems(response.data.results);
    console.log(response.data);
    console.log(typeof(response.data))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  return (        
    <div>
      <List items={items}/>
    </div>
  );
}

export default App;
