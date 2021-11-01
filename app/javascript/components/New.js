import React from 'react'
import axios from 'axios'

class New extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ""
        };
    }
    handleChange = e => {
        this.setState({input: e.currentTarget.value});

    };
    
    handleSubmit = e => {
        var data = {
            content: this.state.input,
        }
        axios.post('/posts', data)
        e.preventDefault();
        if (!this.state.input) return;
        this.props.onSubmit(this.state.input)     
        this.setState({input: ""});
    };
    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.input} onChange={this.handleChange}/>
                <button>追加</button>
            </form>
        )
    }
}

export default New;