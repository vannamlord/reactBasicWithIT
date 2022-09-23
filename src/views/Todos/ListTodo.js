import React from "react";
import AddTodo from "./AddTodo";
// import ShowTodo from "./ShowTodo";
import './ListTodos.scss';
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'devops' },
            { id: 'todo2', title: 'BA' },
            { id: 'todo3', title: 'Fullstack' }
        ]
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy !");
    }
    handleClickDelete = (todo) => {
        this.setState({
            listTodos: this.state.listTodos.filter(item => item.id !== todo.id)
        })
    }
    handleClickEdit = () => {
        console.log('Try Edit SomeThing?')
    }
    render() {
        let { listTodos } = this.state;
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                    deleteTodo={this.deleteTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1}-{item.title}</span>
                                    <button className="edit" type="button"
                                        onClick={() => this.handleClickEdit(item)}>
                                        Edit
                                    </button>
                                    <button className="delete" type="button"
                                        onClick={() => this.handleClickDelete(item)}>
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;