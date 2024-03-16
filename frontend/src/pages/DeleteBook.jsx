import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';
import axios from 'axios';

export const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        console.log('deleted record');
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, navigate]);

  return (
    <div>{loading ? (<Spinner/>) : (<div></div>)}</div>
  );
};

export default DeleteBooks;
