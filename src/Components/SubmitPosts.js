import Axios from "axios";
import React, { Component } from "react";

class SubmitPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      title: "",
      body: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.state.userid;
    const title = this.state.title;
    const body = this.state.body;

    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      userid: username,
      title: title,
      body: body,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="postcontainer">
        <label>Username</label>
        <input
          type="text"
          name="userid"
          placeholder="Enter UserID"
          value={this.state.username}
          onChange={this.onChange}
        />
        <br />
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter the title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <br />
        <label>Body</label>
        <input
          type="text"
          name="body"
          placeholder="Enter the body"
          value={this.state.body}
          onChange={this.onChange}
        />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default SubmitPosts;
