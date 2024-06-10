import React from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import { useComments } from '../context/CommentContext';

const HomePage = () => {
    const { getCommentsByDate, saveToDbJson } = useComments();
    const comments = getCommentsByDate();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Comments</h1>
            <CommentForm />
            <CommentList comments={comments} />
            <button 
                onClick={saveToDbJson} 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Guardar en db.json
            </button>
        </div>
    );
};

export default HomePage;
