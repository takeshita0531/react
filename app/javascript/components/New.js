// import React, { useState } from 'react'
// import axios from 'axios'

import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FiSend } from 'react-icons/fi'

const InputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const InputContent = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 2px 7px;
`

const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  padding: 2px 10px;
  background: #1E90FF;
  color: #fff;
  text-align: center;
  cursor: pointer;
`
const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
  `

function New(props) {
    const postState = {
        id: null,
        content: "aaa",
        check: false
    }

    const [post, setPost] = useState(postState)

    // const handleChange = e => {
    //     setPost({content: e.currentTarget.value});

    // };

    const handlePost = event => {
        const { content, value } = event.target;
        setPost({ ...post, [content]: value })
    }
    const savePost = () => {
        var data = {
            content: post.content
        }

        axios.post('/posts', data)
        .then(resp => {
            setPost({
                // id: resp.data.id,
                content: resp.data.content,
                check: resp.data.check
            })
        })
        // notify()
        props.history.push('/posts');
    }
    return(
       <>
        <h1>New Todo</h1>
        <InputAndButton>
          <InputContent
            type="text"
            // required
            value={post.content}
            // content="content"
            onChange={handlePost}
          />
          <Button
            onClick={savePost}
          >
            <Icon>
              <FiSend />
            </Icon>
          </Button>
        </InputAndButton>
      </>
        // <div>
        //     <form>
        //         <input type="text"
        //             required
        //             value={post.content}
        //             content="content"
        //             onChange={handlePost}/>
        //          <button onClick={savePost}>追加</button>
        //     </form>
        // </div>
    )


}

// class New extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             input: ""
//         };
//     }
//     handleChange = e => {
//         this.setState({input: e.currentTarget.value});

//     };
    
//     handleSubmit = e => {
//         var data = {
//             content: this.state.input,
//         }
//         axios.post('/posts', data)
//         e.preventDefault();
//         if (!this.state.input) return;
//         this.props.onSubmit(this.state.input)     
//         this.setState({input: ""});
//     };
//     render() {

//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input type="text" value={this.state.input} onChange={this.handleChange}/>
//                 <button>追加</button>
//             </form>
//         )
//     }
// }

export default New;