import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <React.Fragment>
      <Normalize />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/counter' element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
