import React from 'react';
// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { Router, Switch, Route, Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Index from './Index';
import New from './New';
import Edit from './Edit';


// class App extends React.Component {
//     render() {
//         return(
//             <>
//             <Index />
//             <BrowserRouter>
//                 <Link to="/posts/new">
//                     Post
//                 </Link>
//                 <Link to="/posts">
//                     Posts
//                 </Link>
//                 <Router>
//                 {/* <Switch> */}
//                     <Route path="/posts" component={Index} />
//                     <Route path="/posts/new" component={New} />
//                 {/* </Switch> */}

//                 </Router>
//             </BrowserRouter>
//             {/* <Index /> */}
//             </>
//         )
//     }
// }
// function ShowIndex() {
//     return(
//         <>
//         <Outlet />
//         aaaa
//             <Index />
//         </>
//     )
// }

function App() {
        return(
            <>
            
            <BrowserRouter>
                <Link to="/posts/new">
                    Post
                </Link>
                <Link to="/posts">
                    Posts
                </Link>
                <Routes>
                    <Route exact path="/posts" element={<Index />} />
                    <Route exact path="/posts/new" element={<New />} />
                    <Route exact path="/posts/:id/edit" element={<Edit />} />
            
                </Routes>
            </BrowserRouter> 
                
            </>
        )
    }

export default App;