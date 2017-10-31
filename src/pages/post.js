import React, { Component } from 'react';
import posts from '../data/posts';
import Menu from '../components/menu';
class Post extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    let post = posts.filter(post => post.id === parseInt(match.params.postId));
    post = post[0];

    return (
      <section>
        <Menu />
        <div className="post-section">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        </div>
      </section>
    )
  }
}

export default Post;