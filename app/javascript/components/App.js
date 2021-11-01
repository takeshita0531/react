import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Index from './Index';
import New from './New';

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            
            <div>
                App
                <table className="task">
                    <thead  data-type="ok">
                    <tr><th>内容</th><th>編集</th><th>削除</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.props.posts.map((post) => {
                                return (
                                        <td>
                                            {post.content}
                                        </td>
                                    )
                                })}
                                <td>編集</td>
                                <td>削除</td>
                        </tr>
                    
                       
                    </tbody>
                </table>                
            </div>
        )
    }
}

export default App;