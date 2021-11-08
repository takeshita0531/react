import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
// import { BrowserRouter as Routes, Route, useHistory} from 'react-router-dom';

// import { useHistory } from "react-router-dom";
// import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom';

const InputName = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 2px 7px;
  margin: 12px 0;
`

const CurrentStatus = styled.div`
  font-size: 19px;
  margin: 8px 0 12px 0;
  font-weight: bold;
`

const IsCompletedButton = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  padding: 5px 10px;
  background: #f2a115;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

const EditButton = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  padding: 5px 10px;
  margin: 0 10px;
  background: #0ac620;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

function Edit(props) {
    let history = useHistory()

    const postState = {
        content: "",
    }
    
    const [currentPost, setCurrentPost] = useState(postState)
    const { id } = useParams()
    

    const getPost = id => {
        axios.get(`/posts/${id}`)
        .then(resp => {
            setCurrentPost(resp.data)
        })
    }

    // useEffect(() => {
    //     getPost(id)
    // }, [id])

    const handleInputChange = event => {
        const { content, value } = event.target;
        setCurrentPost({ ...currentPost, [content] :value })
    }


    const updatePost = () => {
        axios.patch(`/posts/${id}`, currentPost)
        .then(resp => {
            history.push('/posts')
        })
    }
    return(
        <>
            <h1>編集</h1>
            <InputName
                type="text"
                name="content"
                value={currentPost.content}
                onChange={handleInputChange}
            >
            </InputName>
            <EditButton onClick={updatePost}>
                更新
            </EditButton>
        </>
    )
}

export default Edit;