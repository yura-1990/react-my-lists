import axios from "axios";
import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: [], newTodo: '' };
    this.url = "https://61cd78337067f600179c5aa6.mockapi.io";
    
    this.handlerInfo = this.handlerInfo.bind(this)
  }

  async componentDidMount() {
    const respond = await axios.get(`${this.url}/todos`);
    this.setState({
      todo: respond.data,
    });
    console.log(this.state);
  }
  
  async addTodo(){
    
    // const respond = await axios.post(`${this.url}/todos`, {
    //   name: this.state.newTodo
    // })
  }
  
  handlerInfo(even){
    this.setState({
      newTodo: even.target.value
    })
    
    
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex mt-3 mb-3 justify-content-center">
          <input 
          type="text" 
          placeholder="Type new todo"
          className="input-group-text w-25"
          onChange={this.handlerInfo}
          />

          <button
          className="btn btn-info ms-3"
          
          >Add todo</button>
        </div>
        <ul className="todo ">
          {this.state.todo.map((item) => {
            return (
              <li
                className="todo__link py-2 my-3 shadow nav-link w-50 mx-auto d-flex align-items-center rounded-3 overflow-hidden"
                key={item.createdAt}
              >
                <button className="btn btn-info d-block text-white">Update</button>

                <span className="text-center w-100">{item.name}</span>
                
                <button className="btn btn-danger d-block text-white ms-auto">Update</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
