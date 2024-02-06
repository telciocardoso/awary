import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login  from './components/Login';
import Main  from './components/Main';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Main />} />
          
  
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;