import MakePostForm from './MakePostForm';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {

  const makePostHandler = values => {
    props.onMakePost(values.newPostBody);
  };

  return (
    <div className={styles['my-posts']}>
      <div >
        <h3>My Posts</h3>
        <MakePostForm onSubmit={makePostHandler} />
      </div>
      <div>
        <ul>
          {props.posts.map(item => <Post key={item.id} message={item.body} likes={item.likes} />)}
        </ul>
      </div>
    </div>
  );
};

export default MyPosts;