import React, { Component } from 'react'
import uuid from 'uuid';

export class Table extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }    

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return this.props.restaurants.map((todo) => (
            <tr key={uuid.v4()}>
                <td>{todo.name}</td>
                <td>{todo.area}</td>
                <td>{todo.address}</td>
                <td>${todo.price}</td>
            </tr>
            // <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}

export default Table
