import React from "react";

class ShowTodo extends React.Component {
    render() {
        let listTodos = this.props;
        return (
            <div>
                {listTodos && listTodos.length > 0 &&
                    listTodos.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                <span>{index + 1}-{item.title}</span>
                                <button className="edit" type="button">Edit</button>
                                <button className="delete" type="button">Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default ShowTodo;