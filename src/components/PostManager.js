import React from 'react';
import PostContext from '../contexts/PostContext';


const Post = () => {
  return (
    <PostContext.Consumer>
        {
          (context) => (
            <div>
      <h4>Title : {context.post.title}</h4>
    </div>
          )
        }

    </PostContext.Consumer>
    
  );
};

  export default Post;