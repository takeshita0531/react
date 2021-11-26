import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Index from './Index';
import New from './New';
import Edit from './Edit';
import Search from './Search'
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: "index"
        }
    }

    
    componentDidMount() {
        axios.get('/modes.json')
        .then(resp => {
            var mode = resp.data.map((filter) => filter.filter)
            this.setState({filter: mode[0]});
        });
    }
    
    handleChange(event) {
        var data = {
            filter: event
        }
        this.setState({filter: event})
        axios.post('/modes', data)
        .then(resp => {
            this.setState({filter: event});
        });

    }
    
    render() {
        let getFilter;
        if (this.state.filter === "index") {
            getFilter = <Index />
        } else if (this.state.filter === "new") {
            getFilter = <New />
        } else {
            getFilter = <Search />
        }
    
        return(
            <div className="app">
                <select value={this.state.filter} onChange={e => this.handleChange(e.target.value)}>
                    <option value="index">投稿一覧</option>
                    <option value="new">新規投稿</option>
                    <option value="search">投稿検索</option>
                </select>
                {getFilter}
            </div>
            
            )
            
        }
    }

// function App() {
//     return(
//         <>
            {/* <BrowserRouter>
                <Link className="post" to="/posts/new">
                    新規投稿
                </Link>
                <Link to="/posts">
                    投稿一覧
                </Link>
                <Routes>
                    <Route exact path="/posts" element={<Index />} />
                    <Route exact path="/posts/new" element={<New />} />
                    <Route exact path="/posts/:id/edit" element={<Edit />} />
                </Routes>
            </BrowserRouter>  */}
//         </>
//     );
// };

export default App;