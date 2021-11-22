import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
// import { Link, useNavigate } from 'react-router-dom';


const CheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  color: green;
  cursor: pointer;
`

const UncheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  cursor: pointer;
`

function Index() {
    // let navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [searchContent, setSearchContent] = useState('')

    useEffect(() => {
        axios.get('/posts.json')
        .then(resp => {
            setPosts(resp.data);
        });
    }, []);

    const updatePost = (post, key) => {
        var data = {
            content: post.content,
            check: !post.check,
            editing: false
        };
        axios.patch(`/posts/${post.id}.json`, data)
            .then(resp => {
                const newPosts = [...posts];
                newPosts[key].check = resp.data.check
                setPosts(newPosts);
            });
            // navigate("/posts")
    };

    const removePost = (postId) => {
        const sure = window.confirm('削除しますか？')
        if (sure) {
            axios.delete('/posts/' + postId)
            .then(resp => {
            });
        };
    };

    const clickEdit = () => {
        var data = {
            editing: true
        }
        setPosts(data)
    }

    return(
        <div>
            {/* <input type="text" placeholder="投稿検索" onChange={event => {setSearchContent(event.target.value)}}/> */}
            <table className="task">
                <thead  data-type="ok">
                <tr><th></th><th>内容</th><th></th><th></th></tr>
                </thead>
                <tbody>
                {posts.map((post, key) => {
                    return(
                        <tr>
                            <td key={key}>
                                {post.check ? (
                                    <CheckedBox>
                                        <ImCheckboxChecked onClick={() => updatePost(post, key) } />
                                    </CheckedBox>
                                ) : (
                                    <UncheckedBox>
                                        <ImCheckboxUnchecked onClick={() => updatePost(post, key) } />
                                    </UncheckedBox>
                                )}
                            </td>
                            <td>
                                {post.content}
                            </td>
                            
                            <td>
                            {post.editing ? (
                                <Edit />
                            ):(
                                <Index />
                            )
                            }
                            {/* post.editing ? */}
                                {/* {post.editing ? } */}
                            </td>
                            {/* <td onClick={clickEdit}>
                                <Link to={"/posts/" + post.id + "/edit"}>
                                    編集
                                </Link>
                            </td> */}
                            <td><a href="" onClick={(e) => removePost(post.id, e)}>削除</a></td>
                        </tr>
                    );
                })}
                
                </tbody>
            </table>
        </div>
    );
};

export default Index;