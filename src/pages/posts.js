import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import posts from '../data/posts';
import Menu from '../components/menu';

class Posts extends Component {

  render() {
    return (
      <section className="posts">
        <Menu />
        <h3>Posts</h3>
        {posts.map(post => 
          <article key={post.id} className="post">
            <Link to={`/post/${post.id}`}>
            <h4>{post.title}</h4>
            <p>{post.excerpt}</p>
            <span>{post.author}</span>
            </Link>
          </article>
        )}
      </section>
    )
  }
}

export default Posts;