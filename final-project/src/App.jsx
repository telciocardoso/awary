import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login  from './components/Login';
import Home  from './components/Home';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          
  
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
