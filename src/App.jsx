import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ByCategoryPage from './Pages/ByCategoryPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/byCategory/:categoryID" element={<ByCategoryPage />}></Route>
          <Route path="/details/:postID" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
