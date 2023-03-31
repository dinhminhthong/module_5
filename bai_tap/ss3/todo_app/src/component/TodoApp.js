import React, {Component} from 'react';

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todoName : "",
            todoList : [],
        };
    }
    handleInputText(value) {
        this.setState({
            todoName : value
        });
    }
    handleAddToList(){
        const newArr = [...this.state.todoList,this.state.todoName];
        this.setState({
            todoName : "",
            todoList : newArr,
        });
    }
    render() {
        let stt = 1;
        return (
            <>
                <div >
                    <h1 >Todo List</h1>

                    <div>
                        <input
                            type="text"
                            placeholder="Text"
                            value={this.state.todoName}
                            onChange={(event) => this.handleInputText(event.target.value)}
                        />
                        <button onClick={() => this.handleAddToList()}>Add</button>
                    </div>
                </div>

                <div>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col" style={{ border: '1px solid black' }}>ID</th>
                            <th scope="col" style={{ border: '1px solid black' }}>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todoList.map((value, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black' }}>{stt++}</td>
                                <td style={{ border: '1px solid black' }}>{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}


export default TodoApp;