import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import Header from './Commponents/Header/Header';
import Login from './Commponents/LoginPage/Login'

function App() {
  return (
   
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
     
    </div>
 
  );
}

export default App;
