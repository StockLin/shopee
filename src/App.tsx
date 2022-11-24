import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import { Counter } from './features/counter/Counter';
import Home from './features/home/Home';
import Login from './features/login/Login';

const  App : React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account/register' element={<div>Register Page</div>} />
          <Route path='/account/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
