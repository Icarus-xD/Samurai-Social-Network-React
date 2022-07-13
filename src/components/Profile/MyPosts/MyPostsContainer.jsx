import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { makePostAC } from '../../../store/actionCreators';

const mapStateToProps = state => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
  };
};

export default connect(mapStateToProps, {
  onMakePost: makePostAC,
})(MyPosts);