import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentPageAC, getUsersTC,
  toggleFollowTC } from '../../store/actionCreators';
import Users from './Users';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, 
  getPageSize, getTotalUserCount, getUsers } from '../../store/selectors/users-selectors';

const UsersContainer = props => {

  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, []);

  const changePage = page => {
    props.onSetPage(page);
    props.getUsers(page, props.pageSize);
  };

  return (
    <>
      {props.isFetching ? <Preloader /> : ''}
      <Paginator currentPage={props.currentPage} totalItemCount={props.totalUserCount} pageSize={props.pageSize} onChangePage={changePage}/>
      <Users users={props.users} followingInProgress={props.followingInProgress} onToggleFollow={props.toggleFollow} />
    </>
  );
};

const mapStateToProps = state => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUserCount: getTotalUserCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

export default connect(mapStateToProps, {
  onSetPage: setCurrentPageAC,
  toggleFollow: toggleFollowTC,
  getUsers: getUsersTC,
})(UsersContainer);