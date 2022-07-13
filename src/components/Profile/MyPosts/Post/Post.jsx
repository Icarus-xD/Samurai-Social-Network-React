import styles from './Post.module.css';

const Post = props => {
  return (
    <li className={styles.post}>
      <img className={styles['user-picture']} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawNFgKqmtCVC3Vgn6yGMTelSNFOZsH_DRzQ&usqp=CAU' alt='profile picture' />
      <p className={styles.message}>{props.message}</p>
      <span>{props.likes} &lt;3</span>
    </li>
  );
};

export default Post;