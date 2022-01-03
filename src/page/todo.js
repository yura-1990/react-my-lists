import axios from "axios";
import React from "react";
import ListItem from "./components/listItem";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      editing: false,
      notification: null,
      editingIndex: null,
      loading: true,
      todos: [
        {
          name: "Murod",
          id: 1,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
    this.generateId = this.generateId.bind(this);
    this.alert = this.alert.bind(this);
    this.url = "https://61cd78337067f600179c5aa6.mockapi.io";
  }

  async componentDidMount() {
    const response = await axios.get(`${this.url}/todos`);
    this.setState({
      todos: response.data,
      loading: false,
    });
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value,
    });
    // console.log(event.target.name, event.target.value);
  }

  generateId() {
    const todoId = this.state.todos[this.state.todos.length - 1];
    if (todoId) {
      return todoId.id + 1;
    }
    return 1;
  }

  async addTodo() {
    const response = await axios.post(`${this.url}/todos`, {
      name: this.state.newTodo,
    });

    const oldTodos = this.state.todos;
    oldTodos.push(response.data);

    this.setState({
      newTodo: "",
      todos: oldTodos,
    });

    this.alert("The todo is updated seccessfully");

    setTimeout(() => {
      this.alert(null);
    }, 2000);
  }

  async deleteTodo(index) {
    const delTodo = this.state.todos;
    const todo = delTodo[index];
    await axios.delete(`${this.url}/todos/${todo.id}`);
    delete delTodo[index];
    this.setState({ delTodo });

    this.alert("The todo is deleted seccessfully");

    setTimeout(() => {
      this.alert(null);
    }, 2000);
  }

  updateTodo(index) {
    const updateTodo = this.state.todos[index];

    this.setState({
      newTodo: updateTodo.name,
      editing: true,
      editingIndex: index,
    });
  }

  async changeTodo() {
    const editTodo = this.state.todos[this.state.editingIndex];
    const response = await axios.put(`${this.url}/todos/${editTodo.id}`, {
      name: this.state.newTodo,
    });

    const todos = this.state.todos;
    todos[this.state.editingIndex] = response.data;
    this.setState({ todos, editing: false, editingIndex: null, newTodo: "" });
    this.alert("The todo is updated seccessfully");

    setTimeout(() => {
      this.alert(null);
    }, 2000);
  }

  alert(notification) {
    this.setState({
      notification,
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.notification && (
          <div className="alert alert-info table-active w-50 mx-auto text-center">
            {this.state.notification}
          </div>
        )}
        <div className="d-flex mt-3 mb-3 justify-content-center">
          <input
            name="todo"
            type="text"
            placeholder="Type new todo"
            className="input-group-text w-25"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />

          <button
            onClick={this.state.editing ? this.changeTodo : this.addTodo}
            className="btn btn-info ms-3 text-white"
            disabled={this.state.newTodo.length < 5}
          >
            {this.state.editing ? "Edit Todo" : "Add todo"}
          </button>
        </div>
        {this.state.loading && (
          <div className="spinner-border text-primary d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {(!this.state.editing || this.state.loading) && (
          <ul className="todo">
            {this.state.todos.map((item, index) => {
              return ( 
                <ListItem
                  key={item.id}
                  item={item}
                  changeTodo={() => this.updateTodo(index)}
                  deleteTodo={() => this.deleteTodo(index)}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
