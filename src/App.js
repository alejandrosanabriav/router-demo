import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Posts from './pages/posts';
import Post from './pages/post';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/post/:postId" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
