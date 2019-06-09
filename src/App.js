import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component{
  inputElement = React.createRef()
constructor(){
  super()
  //We need the state to hold the array of items,All components using data will change automatically when the data in state changes
  this.state = {
    items:[],
    currentItem: {
      text: '',
       key: ''
      },
    //We need another state called currentItemto hold the current value in the memory
  }
}
deleteItem = key => {
  const filteredItems = this.state.items.filter(item => {
    return item.key !== key
  })
  this.setState({
    items: filteredItems,
  })
}
//The addItem manages adding to the list, and handleInput manages the change in the input field.
handleInput = e =>{
  const itemText =e.target.value
  const currentItem = {text : itemText, key : Date.now()}
  this.setState({
    currentItem,
  })
}
//we need to store this value to the array itemswhen user submits the form
addItem = e =>{
  e.preventDefault()
  const newItem = this.state.currentItem
  if (newItem.text !== '') {
    console.log(newItem)
    const items = [...this.state.items, newItem]
    this.setState({
      items: items,
      currentItem: { text: '', key: '' },
    })
  }
}


render() {
  return (
    <div className="App">
      <TodoList
          addItem={this.addItem} 
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          />
          <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
    </div>
    )
  }
}

export default App;
