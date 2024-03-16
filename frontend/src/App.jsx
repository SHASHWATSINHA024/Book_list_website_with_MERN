import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from          '../src/pages/Home.jsx'
import CreateBooks from '../src/pages/CreateBooks.jsx'
import DeleteBook from  '../src/pages/DeleteBook.jsx'
import ShowBook from      '../src/pages/ShowBook.jsx'
import EditBook from    '../src/pages/EditBook.jsx'
export const App = () => {
  return (
    <Routes>
      <Route path = '/' element= {<Home/>}/>
 <Route path = '/books/create' element= {<CreateBooks/>}/>

 <Route path = '/books/details/:id' element= {<ShowBook/>}/>
  <Route path = '/books/edit/:id' element= {<EditBook/>}/>
   <Route path = '/books/delete/:id' element= {<DeleteBook/>}/>











    </Routes>
  );
};
export default App;