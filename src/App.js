import './App.css';
// import Footer from './Commponents/Footer/Footer';
import Header from './Commponents/Header/Header';
// import NavBar from './Commponents/Nav/Nav';
// import AsideBar from './Commponents/AsideBar/AsideBar';
import Login from './Commponents/LoginPage/Login';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
 
      <div>
        <Header />
        <Login />
      </div>
    
  );
}

export default App;
