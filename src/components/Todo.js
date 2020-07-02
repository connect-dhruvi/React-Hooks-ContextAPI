import React, { Component , useState , useEffect} from 'react';
import axios from 'axios';
import TodoManager from './TodoManager';
import TodoContext from '../contexts/TodoContext';


   function Todo()  {

       const[posts , setPosts]  = useState([])
    useEffect(()=> {

      axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => { 
        setPosts(response.data );
      });

    },[] )


      return (
        <div>

            {posts.map((post) => (
            <TodoContext.Provider value= {{
              post:post,
              key:post.id
            }}>
              <TodoManager></TodoManager>
            </TodoContext.Provider>
             ))}

        </div>
      );
    }
    

    export default Todo;