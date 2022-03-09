import React from 'react'

const PostCard = ( {post}) => {
  return (
    <div>
        {post.title}
        {post.exceprt}
    </div>
  )
}

export default PostCard