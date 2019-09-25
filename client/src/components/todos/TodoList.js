import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, update, rm }) => (
  <div>
    {
      todos.map( todo => 
        <TodoItem 
          key={todo.id}
          {...todo}
          update={update}
          rm={rm}
        />
      )
    }
  </div>
)

export default TodoList;