import React from "react";
import "./css/todoItem.css"

class TodoItem extends React.Component {
    handleClick = () => {
        this.props.onDelete(this.props.index);

    };

    render() {
        return (
            <li className="todo-item">
                <span className="item-name">{this.props.value}</span>
                <span className="item-remove" onClick={this.handleClick}>X</span>
            </li>
        )
    }
}

export default TodoItem