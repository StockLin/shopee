import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import { Counter } from './features/counter/Counter';

const  App : React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/account/register' element={<div>Register Page</div>} />
          <Route path='/account/login' element={<div>Login Page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
