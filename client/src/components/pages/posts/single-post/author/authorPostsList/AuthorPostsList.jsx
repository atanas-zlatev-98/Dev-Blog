import AuthorPostsListItem from './AuthorPostsListItem/AuthorPostsListItem'

const AuthorPostsList = ({author}) => {
  return (
   <div>
        {author.posts?.map(post => <AuthorPostsListItem key={post} postId={post}></AuthorPostsListItem>)}
   </div>
  )
}

export default AuthorPostsList