import { createSelector } from "@reduxjs/toolkit";

export const getUsers = state => {
  return state.users.users;
};

export const getPageSize = state => {
  return state.users.pageSize;
};

export const getTotalUserCount = state => {
  return state.users.totalUserCount;
};

export const getCurrentPage = state => {
  return state.users.currentPage;
};

export const getIsFetching = state => {
  return state.users.isFetching;
};

export const getFollowingInProgress = state => {
  return state.users.followingInProgress;
};

// For example

const difficultCalculations = state => {
  return getUsers(state).filter(u => true);
};

const superCalculations = createSelector(getUsers, (users) => {
  return users.filter(u => true);
})