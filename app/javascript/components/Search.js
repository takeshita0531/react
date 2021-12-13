import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
// import { Link, useNavigate } from 'react-router-dom';
import './Index.css';
import Edit from './Edit';


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

function Search() {
    // let navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [searchContent, setSearchContent] = useState('')
    const [edit, setEdit] = useState({
        id: "",
        editing: false
    })

    useEffect(() => {
        axios.get('/posts.json')
        .then(resp => {
            setPosts(resp.data);
        });
    }, []);

    const updatePost = (post, key) => {
        var data = {
            content: post.content,
            check: !post.check
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

    const handleClickEdit = (post) => {
        var data = ({
            id: post.id,
            editing: true
        })
        setEdit(data)
        // const { onChange, id, editing } = this.props;
        // onChange(id, "editing", !editing);
    };
    let getPost;
    posts.map((post) => {
        if (post.id === edit.id) {
            getPost = post.content
        }
          
    })

    return(
        <div>
            {edit.editing? (
            <div>
                <Edit 
                    content={getPost}
                />
            </div>
            ):(
            <div>
                <div className="flex justify-center">
                    <input className="flex justify-center border border-indigo-600" type="text" placeholder="投稿検索" onChange={event => {setSearchContent(event.target.value)}}/>
                </div>
                <div className="flex justify-center">

                    <div className="relative flex flex-col min-w-0 break-words w-6/12 mb-6 shadow-lg rounded bg-pink-900 text-white">
                        <table className="items-center bg-transparent border-collapse">
                            <thead  data-type="ok">
                            <tr>
                                <th className="px-6 align-middle border border-solid py-3 text-m uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700"></th>
                                <th className="px-6 align-middle border border-solid py-3 text-m uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">内容</th>
                                <th className="px-6 align-middle border border-solid py-3 text-m uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">期日</th>
                                <th className="px-6 align-middle border border-solid py-3 text-m uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700"></th>
                                <th className="px-6 align-middle border border-solid py-3 text-m uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {posts.filter((post) => {
                                if(searchContent === "") {
                                    return post
                                }else if (post.content.includes(searchContent)) {
                                    return post
                                }
                            }).map((post, key) => {
                                return(
                                    <tr>
                                        <td className="w-3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4" key={key}>
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
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                                            {post.content}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                                            {post.duedate}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                                        <button onClick={() => handleClickEdit(post)} className="bg-blue-700 font-semibold text-white py-2 px-4 rounded">
                                            編集
                                        </button>
                                            {/* <Edit id={key}/> */}
                                            {/* <Link to={"/posts/" + post.id + "/edit"}>
                                                編集
                                            </Link> */}
                                        </td> 
                                        {/* <td>
                                            <Link to={"/posts/" + post.id + "/edit"}>
                                                編集
                                            </Link>
                                        </td> */}
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                                            <button className="bg-red-700 font-semibold text-white py-2 px-4 rounded">
                                                <a href="" onClick={(e) => removePost(post.id, e)}>削除</a>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            )}
            
        </div>
    );
};

export default Search;