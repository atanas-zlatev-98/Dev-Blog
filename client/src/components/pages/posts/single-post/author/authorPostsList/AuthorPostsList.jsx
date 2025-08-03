import React, { useState } from 'react'
import AuthorPostsListItem from './AuthorPostsListItem/AuthorPostsListItem'

const AuthorPostsList = ({creator}) => {
  return (
   <div>
        {creator.posts?.map(post => <AuthorPostsListItem key={post} postId={post}></AuthorPostsListItem>)}
   </div>
  )
}

export default AuthorPostsList