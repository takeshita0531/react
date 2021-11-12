import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
    let navigate = useNavigate();
    const [currentPost, setCurrentPost] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/posts/${id}.json`)
        .then(resp => {
            setCurrentPost(
                resp.data.content
         )});
    }, []);

    const updatePost = event => {
        var data = {
            content: currentPost
        };
        event.preventDefault();
        axios.patch(`/posts/${id}`, data)
        .then(resp => {
            navigate("/posts")
        });
    };

    return(
        <>
            <h1>編集</h1>
            <form>
                <input
                    type="text"
                    name="content"
                    value={currentPost}
                    onChange={e => setCurrentPost(e.target.value)}
                />
                <button onClick={updatePost}>更新</button>
            </form>
        </>
    );
};

export default Edit;