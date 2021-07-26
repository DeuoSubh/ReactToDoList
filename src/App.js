import React, { Component } from 'react';
import TodoItems from './Components/TodoItem/Todoitems';
import AddItem from './Components/AddItem/Additem';

class App extends Component {
  state = {
    items : [
      {id: 1 , name :'Name1', age : 29},
      {id: 2 , name :'Name2', age : 28},
      {id: 3 , name :'Name3', age : 22},
    ]
  }

  deleteItem = (id) => {
    let items= this.state.items;
    let i =   items.findIndex(item => item.id === id);
    items.splice(i,1);
    this.setState({items})
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render() {
    return (
      <div className='App Container'>
        <h1 className='text-center'>Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}
export default App;
