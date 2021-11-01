import React from 'react';
// import axios from 'axios'
// import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Index from './Index';
import New from './New';
import axios from 'axios'
import styled from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

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

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
            // id: this.props.id,
            // content: this.props.content,
            // check: this.props.check
        }
      }
    render() {
        let todos = this.state.todos
        let currentId = 0

        const handleSubmit = (content) => {
            const newTodo = {
                id: currentId,
                content,
                check: false
            }
            // axios.post('/posts', newTodo)
            const newTodos = [...this.state.todos, newTodo]
            this.setState({ todos: newTodos});
            currentId++;
        }

        const removePost = (postId) => {
            const sure = window.confirm('削除しますか？')
            if (sure) {
                axios.delete('/posts/' + postId)
                .then(resp => {
                    console.log(resp.postId)
                })
            }
        }

        const updatePost = (post) => {
            var data = {
                id: post.id,
                content: post.content,
                check: true
            }
            
            axios.patch('/posts/' + post.id, data)
            this.setState({
                id: data.id,
                content: data.content,
                check: data.check
            })
            .then(resp => {
                console.log(resp.post.id)
              })
        }

        const unupdatePost = (post) => {
            var data = {
                id: post.id,
                content: post.content,
                check: false
            }
            
            axios.patch('/posts/' + post.id, data)
            this.setState({
                id: data.id,
                content: data.content,
                check: data.check
            })
            .then(resp => {
                console.log(resp.post.id)
              })
            // const newTodos = [...this.state.check, data]
            // this.setState({ data: newTodos});

        }

        return(
            
            <div>
                {/* <New onSubmit={() => handleSubmit()}/>
                App
                <table className="task">
                    <thead  data-type="ok">
                    <tr><th>内容</th><th></th><th></th></tr>
                    </thead>
                    <tbody>
                    {todos.map((post) => {
                            return (
                                <tr>
                                    <td key={post.id}>
                                    {post.check ? (
                                        <CheckedBox>
                                            <ImCheckboxChecked id={post.id} onClick={() => unupdatePost(post) } />
                                        </CheckedBox>
                                    ) : (
                                        <UncheckedBox>
                                            <ImCheckboxUnchecked id={post.id} onClick={() => updatePost(post) } />
                                        </UncheckedBox>
                                    )}
                                        {post.content}
                                    </td>
                                    <td>編集</td>
                                    <td><a href="" onClick={(e) => removePost(post.id, e)}>削除</a></td>
                                </tr>
                            )
                        })} */}
                        <New onSubmit={() => handleSubmit()}/>
                        App
                        <table className="task">
                            <thead  data-type="ok">
                            <tr><th>内容</th><th></th><th></th></tr>
                            </thead>
                            <tbody>
                            {this.props.posts.map((post) => {
                                return (
                                    <tr>
                                        <td key={post.id}>
                                        {post.check ? (
                                            <CheckedBox>
                                                <ImCheckboxChecked id={post.id} onClick={() => unupdatePost(post) } />
                                            </CheckedBox>
                                        ) : (
                                            <UncheckedBox>
                                                <ImCheckboxUnchecked id={post.id} onClick={() => updatePost(post) } />
                                            </UncheckedBox>
                                        )}
                                            {post.content}
                                        </td>
                                        <td>編集</td>
                                        <td><a href="" onClick={(e) => removePost(post.id, e)}>削除</a></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>                
            </div>
        )
    }
}
// <Index 
//     {...this.props.posts((post) => {
//         return(
//             <Index
//                 id={post.id}
//                 content={post.content}
//                 check={post.check}
//                 posts={posts}
//             />
//         )
//     })}
// />

export default App;