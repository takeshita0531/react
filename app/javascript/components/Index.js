import React from 'react'

class Index extends React.Component {
    render() {
        const PostItem = (props) => {
            const {content} = props.post
        return(
                
                <tr>
                <td>{content}</td>
                </tr>
                
              
        // <div>{this.props.content}</div>
        )
        }
    }
}

export default Index;