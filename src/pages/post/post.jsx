const Post = (props) => {
  const {post} = props;
  const {id} = post;
  return (
    <h1>Post {id}</h1>
  )
};

Post.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
}).isRequired

export default Post;
