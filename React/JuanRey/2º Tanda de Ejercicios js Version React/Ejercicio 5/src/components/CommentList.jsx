import React from 'react';
import { useComments } from '../context/CommentContext';
import CommentForm from './CommentForm';

const CommentList = ({ comments }) => {
    const { likeComment, getReplies } = useComments();

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id} className="border p-4 mb-4">
                    <p>{comment.text}</p>
                    <button onClick={() => likeComment(comment.id)} className="bg-green-500 text-white px-4 py-2 mr-2">
                        Like ({comment.likes})
                    </button>
                    <CommentForm parentId={comment.id} />
                    <div className="ml-4 mt-2">
                        {getReplies(comment.id).map(reply => (
                            <div key={reply.id} className="border p-2 mb-2">
                                <p>{reply.text}</p>
                                <button onClick={() => likeComment(reply.id)} className="bg-green-500 text-white px-4 py-2 mr-2">
                                    Like ({reply.likes})
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
