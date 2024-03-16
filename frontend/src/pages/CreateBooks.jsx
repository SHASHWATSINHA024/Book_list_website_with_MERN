import React, { useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);
    const [publishYear, setPublishYear] = useState('');
    const navigate= useNavigate();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios.post('http://localhost:5555/books', data)
            .then(() => {
                setLoading(false);
                
                console.log("created record");
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'> Create Book</h1>
            {loading ? <Spinner /> : ''}
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
            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
                save
            </button>
        </div>
    );
};

export default CreateBooks;