import React, { Component } from 'react';
// npm install react-router-dom
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

import NotFound from './NotFound/NotFound'

/*
//Early loading
import Home from './Home/Home'
import Maps from './Maps/Maps'
import Blog from './Blog/Blog'
*/

import {Dynamic} from './Dynamic'
import './App.css';


//import createBrowserHistory from 'history/createBrowserHistory';

 //Lazy loading with HOC
import asyncComponent from './AsyncComponent'

const Home = asyncComponent(() =>
     import('./Home/Home').then(module => module.default)     
     
)

const Maps = asyncComponent(() =>
    import('./Maps/Maps').then(module => module.default)
)

const Blog = asyncComponent(() =>
    import('./Blog/Blog').then(module => module.default)
)

//const history = createBrowserHistory();

class App extends Component {
    render () {
        return (
            <Router >
                <div>
                    <header className="header">
                        <h2>Early and Lazy loading in React by Murthy</h2>
                        <nav className="navbar container">          

                            <div className="navbar-end">
                                <Link to="/">
                                    <span className="navbar-item" >Home</span>
                                </Link>
                                <Link to="/maps">
                                    <span className="navbar-item">Maps</span>
                                </Link>
                                <Link to="/blog">
                                    <span className="navbar-item">Blog</span>
                                </Link>
                                <Link to="/profile">
                                    <span className="navbar-item">Profile</span>
                                </Link>
                            </div>
                        </nav>
                    </header>

                    <section className="content">
                        <Switch>    
                            <Route exact path="/" component={Home} />
                            <Route path="/maps" component={Maps} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/profile" component={Dynamic} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </section>
                </div>
            </Router>
        )
    }
}

export default App;
