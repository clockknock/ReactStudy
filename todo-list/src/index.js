import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import AddItem from './AddItem';
import "./css/index.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vals: ["抽烟", "喝酒", "烫头"]
        }
    }

    handleDelete = (index) => {
        let vals = this.state.vals;
        vals.splice(index, 1);
        this.setState({
            vals
        })
    };

    handleAdd = (value) => {
        let vals = this.state.vals;
        vals.push(value);
        this.setState({vals});
    };

    render() {
        let todos = this.state.vals.map((n, i) => {
            return <TodoItem value={n} key={i} index={i} onDelete={this.handleDelete}/>
        });

        return (
            <div className="todo-list">
                <h1>GTD记事本</h1>
                <ul>
                    {todos}
                </ul>

               <AddItem onInputSubmit={this.handleAdd}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);