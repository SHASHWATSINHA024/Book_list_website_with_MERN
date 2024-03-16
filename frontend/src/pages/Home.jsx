import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.date);
        console.log(response.data.date);
        console.log('qwerty')
        console.log(books);
        
        console.log("ccc")
        
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='p-4'>
      <div className='flex justify-between items-centre'>
        <h1 className='text-sky-800 text-4xl'>Book List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      <table className='w-full border-separate'>
        <thead>
          <tr>
            <th className='border'>No</th>
            <th className='border'>Title</th>
            <th className='border'>Author</th>
            <th className='border'>Publish Year</th>
            <th className='border'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 &&books.map((book, index) => (
            <tr key={book._id} className='h-8'>
              <td className='border border-slate-400'>{index + 1}</td>
              <td className='border border-slate-800'>{book.title}</td>
              <td className='border border-slate-500'>{book.author}</td>
              <td className='border border-slate-500'>{book.publishYear}</td>
              <td className='border border-slate-600'>
                <div className='flex justify-centre gap-x-4'>
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-700' />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-green-700' />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
