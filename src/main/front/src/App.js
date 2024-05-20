import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Index from './main/Index';
import Main from './main/Main';
import Join from './user/Join';
import Login from './user/Login';
import Allam from './user/Allam';

const App = () => {
  return (
    <BrowserRouter>
      <>

        {/* 화면에 보이는 영역 */}
        <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/main' element={<Main/>}/>
            <Route path='/user'>
              <Route path='join' element={<Join/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='allam' element={<Allam/>}/>
            </Route>
        </Routes>
      </>
      
    </BrowserRouter>
  );
};

export default App;