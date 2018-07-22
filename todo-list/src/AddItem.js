import React from 'react';
import "./css/addItem.css";

class AddItem extends React.Component{
    handleAdd = (e) => {
        e.preventDefault();

        this.props.onInputSubmit(this.inputNode.value);

        this.inputNode.value = "";
    };

    render(){
        return(
            <form onSubmit={this.handleAdd}>
                <div className="add-item">
                    <input type="text" ref={(input) => this.inputNode = input}/>
                    <input type="submit" value="添加"/>
                </div>
            </form>
        )
    }

}

export default AddItem