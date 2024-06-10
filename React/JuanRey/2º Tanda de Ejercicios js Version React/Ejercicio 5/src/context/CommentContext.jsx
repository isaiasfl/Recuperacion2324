import React, { createContext, useState, useEffect, useContext } from 'react';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
    const [comments, setComments] = useState(new Map());

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch('http://localhost:4000/comments');
            const data = await response.json();
            const commentsMap = new Map(data.map(item => [item.id, item]));
            setComments(commentsMap);
        };

        fetchComments();
    }, []);

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(Array.from(comments.entries())));
    }, [comments]);

    const addComment = async (id, text, parentId = null) => {
        const newComment = {
            id,
            text,
            parentId,
            likes: 0,
            date: new Date().toISOString(),
            replies: []
        };

        const updatedComments = new Map(comments);
        updatedComments.set(id, newComment);

        if (parentId) {
            const parentComment = updatedComments.get(parentId);
            parentComment.replies.push(id);
            updatedComments.set(parentId, parentComment);
        }

        setComments(updatedComments);
        await updateDbJson(Array.from(updatedComments.values()));
    };

    const likeComment = async (id) => {
        const updatedComments = new Map(comments);
        const comment = updatedComments.get(id);
        comment.likes += 1;
        updatedComments.set(id, comment);

        setComments(updatedComments);
        await updateDbJson(Array.from(updatedComments.values()));
    };

    const getCommentsByLikes = () => {
        return Array.from(comments.values()).sort((a, b) => b.likes - a.likes);
    };

    const getCommentsByDate = () => {
        return Array.from(comments.values()).sort((a, b) => new Date(b.date) - new Date(a.date));
    };

    const getReplies = (id) => {
        const comment = comments.get(id);
        return comment.replies.map(replyId => comments.get(replyId));
    };

    const updateDbJson = async (comments) => {
        await fetch('http://localhost:4000/comments', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comments)
        });
    };

    const saveToDbJson = async () => {
        const commentsArray = Array.from(comments.values());
        await updateDbJson(commentsArray);
        console.log('Datos guardados en db.json');
    };

    return (
        <CommentContext.Provider value={{
            comments,
            addComment,
            likeComment,
            getCommentsByLikes,
            getCommentsByDate,
            getReplies,
            saveToDbJson
        }}>
            {children}
        </CommentContext.Provider>
    );
};

export const useComments = () => {
    return useContext(CommentContext);
};
