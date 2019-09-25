import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // TODO make a call to the rails to grab all the todo item
    // TODO set state of todo to the ones we have from db 
  }

  addItem = (incommingTodo) => {
    // TODO add the new todo in the db
    // TODO update client state
  }

  updateTodo = (id) => {
    // TODO update the todo with id in the db
    // TODO update the todo with the id in the state
  }

  deleteTodo = (id) => {
    // TODO make api call to delete item with id in db
    // TODO delete item with id in state
  }

  render() {
    return (
      <Container>

      </Container>
    )
  }
}

export default App;