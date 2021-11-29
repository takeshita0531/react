import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function New() {
    // let navigate = useNavigate();
    const [content, setPost] = useState("");
    
    const savePost = event => {
        var data = {
            content: content
        };
        //  var dataa = {
        //     content: ""
        // };
        event.preventDefault();
        axios.post('/posts', data)
        .then(resp => {
            setPost(resp.data)
            // setPost({
            //     content: dataa
            //     // check: resp.data.check
            // });
            // navigate("/posts")
        });
    };

    return(
        <form>
            <input
                type="text"
                name="content"
                value={content}
                onChange={e => setPost(e.target.value)}
            />
            <button onClick={savePost}>追加</button>
        </form>
    );
};

export default New;