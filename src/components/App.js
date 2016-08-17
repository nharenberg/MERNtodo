import React, { Component } from "react";


export default class App extends Component {
  constructor() {
    super(); //initialize 'this'

    this.state = {
      todos: []
    }

  }

  componentDidMount() {

    fetch("/api/todos")
      .then(res => {
        return res.json();
      })
      .then(todos => {
        console.log("todos:", todos);

        this.setState({todos})
      })
      .catch(err => {
        console.log("err:", err);
      })
  }


  render() {
    return (
      <div>
        <h1>hi</h1>

        {this.props.childrem}
      </div>
    )
  }
}