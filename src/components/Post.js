import React, { Component , useState , useEffect} from 'react';
import axios from 'axios';
import PostManager from './PostManager';
import PostContext from '../contexts/PostContext';


   function Todo()  {

       const[posts , setPosts]  = useState([])
    useEffect(()=> {

      axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => { 
        setPosts(response.data );
      });

    },[] )


      return (
        <div>

            {posts.map((post) => (
            <PostContext.Provider value= {{
              post:post,
              key:post.id
            }}>
              <PostManager></PostManager>
            </PostContext.Provider>
             ))}

        </div>
      );
    }
    

    export default Todo;