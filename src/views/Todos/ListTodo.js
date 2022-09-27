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
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy !");
    }
    handleDeleteTodo = (todo) => {
        this.setState({
            listTodos: this.state.listTodos.filter(item => item.id !== todo.id)
        })
        toast.success("Delete Success !");
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) {
            //Edit
            let listTodoCopy = [...listTodos];
            let objIndex = '';
            objIndex = listTodoCopy.findIndex((obj => obj.id === todo.id));
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodoCopy,
                editTodo: ''
            })
            toast.success('Save Success');
        }
        //Save
        else {
            this.setState({
                editTodo: todo
            })
        }
    }
    handleOnChangeEnvent = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>>Link connected');
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
                                    {isEmptyObj === true ?
                                        <span>{index + 1}-{item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEnvent(event)}
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1}-{item.title} </span>
                                            }
                                        </>

                                    }
                                    <button className="edit" type="button"
                                        onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'}
                                    </button>
                                    <button className="delete" type="button"
                                        onClick={() => this.handleDeleteTodo(item)}>
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