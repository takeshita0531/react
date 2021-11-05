import React from 'react';
// import React, { useEffect } from 'react'
// import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Index';
import New from './New';


// const CheckedBox = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0 7px;
//   color: green;
//   cursor: pointer;
// `

// const UncheckedBox = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0 7px;
//   cursor: pointer;
// `

function App() {
    return(
        <>
            <Link to="/posts">
                Posts
            </Link>
            <Link to="/posts/new">
                Add New Post
            </Link>
            <Switch>
            <Route exact path="/posts" component={Index} />
            <Route exact path="/posts/new" component={New} />
            {/* <Route path="/todos/:id/edit" component={EditTodo} /> */}
            </Switch>
            {/* <div>
                <BrowserRouter>

                    <Route path="/posts" component={Index} />
                    <Route path="/posts/new" component={New} />
                </BrowserRouter>
            </div> */}
            {/* <New /> */}
            <Index />
        </>
    )
}

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
            
            
//             todos: [
                
//                 {
//                     // id: post.id,
//                     content: "ssss"
//                     // check: post.check
//                 },
//                 {
//                     // id: post.id,
//                     content: "ssss"
//                     // check: post.check
//                 }

//             ]
//             // id: this.props.id,
//             // content: this.props.content,
//             // check: this.props.check
//         }
//       }
//     render() {
//         let todos = this.state.todos
//         let currentId = 0
//         // const { todos } = this.state
//         const { posts } = this.props
        
//         // let indexPost = () => {
//         //     axios.get('/posts.json')
//         //     .then(resp => {
//         //       console.log(resp.data)
//         //       setTodo(resp.data);
//         //     }, [])
//         // }

//         // useEffect(() => {
//         //     axios.get('/posts.json')


//         // const removePost = (postId) => {
//         //     const sure = window.confirm('削除しますか？')
//         //     if (sure) {
//         //         axios.delete('/posts/' + postId)
//         //         .then(resp => {
//         //             console.log(resp.postId)
//         //         })
//         //     }
//         // }

//         const updatePost = (post) => {
//             var data = {
//                 id: post.id,
//                 content: post.content,
//                 check: true
//             }
            
//             axios.patch('/posts/' + post.id, data)
//             this.setState({
//                 id: data.id,
//                 content: data.content,
//                 check: data.check
//             })
//             .then(resp => {
//                 console.log(resp.post.id)
//               })
//         }

//         const unupdatePost = (post) => {
//             var data = {
//                 id: post.id,
//                 content: post.content,
//                 check: false
//             }
            
//             axios.patch('/posts/' + post.id, data)
//             this.setState({
//                 id: data.id,
//                 content: data.content,
//                 check: data.check
//             })
//             .then(resp => {
//                 console.log(resp.post.id)
//               })
//             // const newTodos = [...this.state.check, data]
//             // this.setState({ data: newTodos});

//         }

//         return(
            
//             <div>
//                 {/* <New onSubmit={() => handleSubmit()}/>
//                 App
//                 <table className="task">
//                     <thead  data-type="ok">
//                     <tr><th>内容</th><th></th><th></th></tr>
//                     </thead>
//                     <tbody>
//                     {todos.map((post) => {
//                             return (
//                                 <tr>
//                                     <td key={post.id}>
//                                     {post.check ? (
//                                         <CheckedBox>
//                                             <ImCheckboxChecked id={post.id} onClick={() => unupdatePost(post) } />
//                                         </CheckedBox>
//                                     ) : (
//                                         <UncheckedBox>
//                                             <ImCheckboxUnchecked id={post.id} onClick={() => updatePost(post) } />
//                                         </UncheckedBox>
//                                     )}
//                                         {post.content}
//                                     </td>
//                                     <td>編集</td>
//                                     <td><a href="" onClick={(e) => removePost(post.id, e)}>削除</a></td>
//                                 </tr>
//                             )
//                         })} */}
//                         <New onSubmit={this.handleSubmit}/>
//                         App
//                         <table className="task">
//                             <thead  data-type="ok">
//                             <tr><th>内容</th><th></th><th></th></tr>
//                             </thead>
//                             <tbody>
//                             {/* {this.props.posts.map((post) => { */}
//                             {this.state.todos.map((post, key) => {
//                                 return (
//                                     <tr>
//                                         <td key={key}>
//                                         {post.check ? (
//                                             <CheckedBox>
//                                                 <ImCheckboxChecked id={post.id} onClick={() => unupdatePost(post) } />
//                                             </CheckedBox>
//                                         ) : (
//                                             <UncheckedBox>
//                                                 <ImCheckboxUnchecked id={post.id} onClick={() => updatePost(post) } />
//                                             </UncheckedBox>
//                                         )}
//                                             {post.content}
//                                         </td>
//                                         <td>編集</td>
//                                         <td><a href="" onClick={(e) => removePost(post.id, e)}>削除</a></td>
//                                     </tr>
//                                 )
//                             })}
//                     </tbody>
//                 </table>                
//             </div>
//         )
//     }
//     handleSubmit = content => {
//         const newTodo = {
//             // id: posts.id,
//             content,
//             // check: posts.check
//         }
//         axios.get('/posts', newTodo)
//         .then(resp => {
//         const newTodos = [...this.state.todos, newTodo]
//         this.setState({ todos: newTodos});
//         })
//         // currentId++;
    
//     }

// }
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