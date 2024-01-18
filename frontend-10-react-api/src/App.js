import logo from './logo.svg';
import './App.css';
import List from './components/List'
import axios from 'axios';
import { useEffect, useState, useContext  } from 'react';
import MyContext from './contexts/myContext';
import { Provider } from "react-redux";
import store from "./store";
import ListRedux from "./components/ListRedux";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './showListReducer'






function App() {
  const [items, setItems] = useState([]);


  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then(function (response) {
    // handle success
  
    
    setItems(response.data.results);
    const count = useSelector((items) => state.counter.value)
    const dispatch = useDispatch()
    dispatch(increment())
    console.log(response.data.results);
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  return (       
    // exemplo com context api
    /*
    <MyContext.Provider value={{items, setItems}}>
        <div>
        <List />
        </div>
    </MyContext.Provider> 
  */
    // exemplo com redux
   
    <Provider store={store}>
      <div>
        <ListRedux />
      </div>
    </Provider>

  );
}

export default App;
