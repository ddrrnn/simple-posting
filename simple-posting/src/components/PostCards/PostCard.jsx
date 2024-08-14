import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const PostCard = ({username}) => {
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">  
        <div class="card-body">
            <PostHeader username={username}/>
            <p>Click the button to listen on Spotiwhy app.</p>
            <PostFooter />
        </div>
        </div>
    </div>
  )
}

export default PostCard
