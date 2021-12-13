import React, { useState, useEffect } from 'react';
import Edit from './Edit';
import axios from 'axios';
import styled from 'styled-components';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
// import { Link, useNavigate } from 'react-router-dom';
import './Index.css';


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
    const [edit, setEdit] = useState({
        id: "",
        editing: false
    })
    // this.state = {
    //     id: "",
    //     editing: false
    // }

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
            // editing: false
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

    // const clickEdit = () => {
    //     var data = {
    //         editing: true
    //     }
    //     setPosts(data)
    // }

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
    let getPostId;
    posts.map((post) => {
        if (post.id === edit.id) {
            getPost = post.content
            getPostId = post.id
        }
          
    })

    //   const postId;
    // } else if (this.state.filter === "new") {
    //     getFilter = <New />
    // } else {
    //     getFilter = <Search />
    // }
      
    const handleChangeTodoAttribute = (id, key, value) => {
        var data = ({
            id: id,
            editing: false
        })
        // getEdit
        if (id === edit.id) {
            // getEdit = false
            setEdit(data)
        }
        console.log(id)
      };

    return(
        
        <div className="w-full mb-12 px-4 flex justify-center">
            {/* <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                    <h3 className="font-semibold text-lg text-white">Card Tables</h3>
                    </div>
                </div>
            </div> */}
            {edit.editing? (

                <div>
                    {/* {posts.map((post, key) => { */}
                        {/* return( */}
                            <Edit 
                                // postId={post.id}
                                id={getPostId}
                                content={getPost}
                                onCancel={handleChangeTodoAttribute}
                            />
                            
                            {/* );
                    })} */}
                </div>
            ):(
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
                    {posts.map((post, key) => {
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
                                {edit.id}
                                </td> 
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                                    <button className="bg-red-700 font-semibold text-white py-2 px-4 rounded">
                                        <a href="" onClick={(e) => removePost(post.id, e)}>削除</a>
                                    </button>
                                </td>
                                {/* <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">aaaa</button> */}
                            </tr>
                            
                            );
                    })}
                    
                    </tbody>
                </table>
            </div>
            )}
        </div>
    );
};

export default Index;