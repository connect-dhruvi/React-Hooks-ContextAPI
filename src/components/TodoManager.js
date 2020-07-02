import React from 'react';
import TodoContext from '../contexts/TodoContext';


const Todo = () => {
  return (
    <TodoContext.Consumer>
        {
          (context) => (
            <div>
      <h4>Title : {context.post.title}</h4>
    </div>
          )
        }

    </TodoContext.Consumer>
    
  );
};

  export default Todo;