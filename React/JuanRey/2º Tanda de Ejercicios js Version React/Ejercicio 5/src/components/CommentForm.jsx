import { useState } from 'react';
import { useComments } from '../context/CommentContext';

const CommentForm = ({ parentId = null }) => {
    const { addComment } = useComments();
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now().toString();
        addComment(id, text, parentId);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                className="border p-2 w-full mb-2"
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Comment</button>
        </form>
    );
};

export default CommentForm;
