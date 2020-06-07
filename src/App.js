import React from 'react';
import Todos from './components/Todos'
import AddForm from './components/AddForm'

class App extends React.Component {
  
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({todos})
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
          <h1 className="center"><b>Todo List</b></h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddForm addTodo={this.addTodo}/>
      </div>
    )
  }
}
export default App;
