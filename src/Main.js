import React, { Component } from 'react';
import TodoList from './TodoList'
import Form from './form.js'
import Actions from './Action.js'


const Header = () => (
  <div className="header">TODO</div>
)

class Main extends Component {
  render() {
    return (

          <div className="main">
            <Header />
            <TodoList />
            <Form />
            <Actions />
          </div>
        
    );
  }
}

export default Main;
