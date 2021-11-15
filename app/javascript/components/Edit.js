import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
    const initialTodoState = {
        id: null,
        content: "",
        check: false
      }
    let navigate = useNavigate();
    const [currentPost, setCurrentPost] = useState(initialTodoState);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/posts/${id}.json`)
        .then(resp => {
            // setCurrentPost(resp.data.content)
            setCurrentPost({
                content: resp.data.content,
                check: resp.data.check
            })
        });
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
    
    const updateCheck = post => {
        var data = {
            // content: post.content,
            check: !post.check
        };
        axios.patch(`/posts/${id}`, data)
        .then(resp => {
            setCurrentPost(resp.data)
        })
    }
    return(
        <>
            <h1>編集</h1>
            <form>
                <input
                    type="text"
                    name="content"
                    value={currentPost.content}
                    onChange={e => setCurrentPost(e.target.value)}
                />
                <button onClick={updatePost}>更新</button><br />
                {currentPost.check ? (
                    <button onClick={() => updateCheck(currentPost)}>UnChecked</button>
                ):(
                    <button onClick={() => updateCheck(currentPost)}>Checked</button>
                )
                }
            </form>
        </>
    );
};

export default Edit;