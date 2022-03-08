import { render } from "@testing-library/react";
import React, { Component } from "react";

class TodoList extends Component {
    state = {
        items: [
            "teach dog to do poop outside",
            "clean bike",
            "buy eggs",
            "argue with girlfriend"
        ]
    }

    render() { return (
        <React.Fragment>
            <h1>Todo things</h1>
            <ul>{this.state.items.map(item => (
                <li>{item}</li>
            ))}</ul>
        </React.Fragment> 
    )}
}

export default TodoList