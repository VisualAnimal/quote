import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

import CreateQuote from './pages/CreateQuote'
import QuoteHome from './pages/QuoteHome'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<QuoteHome />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/quote/create' element={<CreateQuote />} />
      <Route path='/quote' element={<QuoteHome />} />
    </Routes>
  );
};

export default App;
