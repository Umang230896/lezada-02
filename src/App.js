
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import { Login } from './pages/Login';


function App() {
  return (

    <>
      <Routes>
        <Route path='/login-register' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>

  );
}

export default App;
