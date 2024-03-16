import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);
    const [publishYear, setPublishYear] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setPublishYear(response.data.publishYear);
                setTitle(response.data.title);
                setLoading(false);
                
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, [id]);

    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios.put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
                setLoading(false);
                console.log("record updated");
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'> Edit Book</h1>
            {loading && <Spinner />}
            <div className='flex-col border-2 border-sky-400 '> Title</div>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='border-2 border-gray-500'
            />

            <div className='flex-col border-2 border-sky-400 '> Author</div>
            <input
                type='text'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className='border-2 border-gray-500'
            />

            <div className='flex-col border-2 border-sky-400 '> Publish Year</div>
            <input
                type='text'
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className='border-2 border-gray-500'
            />
           
            <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
                save
            </button>
        </div>
    );
};

export default EditBooks;
