import { render } from "@testing-library/react";
import React, { Component } from "react";

class TodoList extends Component {
    render() { return (
        <div>
            <h1>Todo things</h1>
            <ul>
                <li>Teach dog to do poop outside</li>
                <li>Clean desk</li>
                <li>Buy vegetables</li>
            </ul>
        </div> 
    )}
}

export default TodoList