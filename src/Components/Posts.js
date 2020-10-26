import React, { Component } from "react";
import axios from "axios";
import "../Components/posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      hasError: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          hasError: true,
        });
      });
  }
  render() {
    const { posts, hasError } = this.state;
    return (
      <div>
        {posts.length
          ? posts.map((post) => (
              <div key={post.id} className="container">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))
          : null}

        {hasError ? <h2>Error fetching data</h2> : null}
      </div>
    );
  }
}

export default Posts;
