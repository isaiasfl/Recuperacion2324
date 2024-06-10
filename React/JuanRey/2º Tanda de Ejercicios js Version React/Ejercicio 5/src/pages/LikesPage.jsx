import React from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import { useComments } from '../context/CommentContext';

const HomePage = () => {
    const { getCommentsByDate } = useComments();
    const comments = getCommentsByDate();

    return (
        <div>
            <h1>Comments</h1>
            <CommentForm />
            <CommentList comments={comments} />
        </div>
    );
};

export default HomePage;
