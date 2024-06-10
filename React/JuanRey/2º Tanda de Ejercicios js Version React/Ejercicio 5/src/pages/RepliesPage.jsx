import React from 'react';
import { useComments } from '../context/CommentContext';

const RepliesPage = () => {
    const { comments, getReplies } = useComments();
    return (
        <div>
            <h1>Replies</h1>
            {Array.from(comments.values()).map(comment => (
                <div key={comment.id} className="border p-4 mb-4">
                    <p>{comment.text}</p>
                    <div className="ml-4 mt-2">
                        {getReplies(comment.id).map(reply => (
                            <div key={reply.id} className="border p-2 mb-2">
                                <p>{reply.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RepliesPage;
