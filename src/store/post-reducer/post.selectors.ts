import { createSelector } from '@reduxjs/toolkit';
import { TRootState } from 'store/store';

import { IPostState } from './post.reducer';

const getPostState = (state: TRootState): IPostState => state.postReducer;

export const selectAllPosts = createSelector(
  [getPostState],
  (state) => state.posts,
);

export const selectPost = createSelector(
  [getPostState],
  (state) => state.post,
);

export const selectAllPostsStatus = createSelector(
  [getPostState],
  (state) => state.fetchingAllPostsStatus,
);

export const selectPostStatus = createSelector(
  [getPostState],
  (state) => state.fetchingPostStatus,
);

export const selectUpdatingPostStatus = createSelector(
  [getPostState],
  (state) => state.updatingPostStatus,
);

export const selectCreatingPostStatus = createSelector(
  [getPostState],
  (state) => state.creatingPostStatus,
);

export const selectDeletingPostStatus = createSelector(
  [getPostState],
  (state) => state.deletingPostStatus,
);
