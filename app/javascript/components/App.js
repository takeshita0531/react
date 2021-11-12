import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Index from './Index';
import New from './New';
import Edit from './Edit';

function App() {
    return(
        <>
            <BrowserRouter>
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
            </BrowserRouter> 
        </>
    );
};

export default App;