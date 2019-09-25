import React from 'react';
import { Header, Checkbox, Button, Icon } from 'semantic-ui-react';
import TodoForm from './TodoForm';

const styles = {
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  complete: {
    textDecoration: 'line-through',
    color: 'grey',
  },
  pointer: {
    cursor: 'pointer',
  }
}

const TodoItem = ({ id, todo_name, complete, update, rm }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox
        defaultChecked={complete}
        onClick={() => update(id)}
      />
      <div style={complete ? styles.complete : {} } className='center'>
        <Header>{todo_name}</Header>
      </div>
    </div>
    <Button
      icon
      color='red'
      size='small'
      onClick={() => rm(id)}
    >
      <Icon name='trash' />
    </Button>
    <TodoForm id={id} todo_name={todo_name} complete={complete} update={update} />
  </div>
)

export default TodoItem;