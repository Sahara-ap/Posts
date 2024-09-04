import { createSlice } from '@reduxjs/toolkit';

import { TFetchStatus } from 'store/api/types/fetch-status.type';
import { IPostResponse } from 'store/api/types/post-response.interface';
import { createPostThunkAction, deletePostThunkAction, fetchAllPostsThunkAction, fetchPostThunkAction, updatePostThunkAction } from './post.thunk-actions';

export interface IPostState {
  posts: IPostResponse[];
  post: IPostResponse | null;

  requestError: string | null;

  fetchingAllPostsStatus: TFetchStatus;
  fetchingPostStatus: TFetchStatus;
  creatingPostStatus: TFetchStatus;
  updatingPostStatus: TFetchStatus;
  deletingPostStatus: TFetchStatus;
}

const initialState: IPostState = {
  posts: [],
  post: null,

  requestError: null,

  fetchingAllPostsStatus: 'initial',
  fetchingPostStatus: 'initial',
  creatingPostStatus: 'initial',
  updatingPostStatus: 'initial',
  deletingPostStatus: 'initial',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostAction: (state, { payload }: { payload: IPostResponse }) => {
      state.post = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPostsThunkAction.pending, (state) => {
        state.requestError = null;
        state.fetchingAllPostsStatus = 'pending';
      })
      .addCase(fetchAllPostsThunkAction.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.fetchingAllPostsStatus = 'fulfilled';
      })
      .addCase(fetchAllPostsThunkAction.rejected, (state, error) => {
        state.fetchingAllPostsStatus = 'rejected';
        state.requestError = JSON.stringify(error);
      });

    builder
      .addCase(fetchPostThunkAction.pending, (state) => {
        state.requestError = null;
        state.fetchingPostStatus = 'pending';
      })
      .addCase(fetchPostThunkAction.fulfilled, (state, action) => {
        state.post = action.payload;
        state.fetchingPostStatus = 'fulfilled';
      })
      .addCase(fetchPostThunkAction.rejected, (state, error) => {
        state.fetchingPostStatus = 'rejected';
        state.requestError = JSON.stringify(error);
      });

    builder
      .addCase(createPostThunkAction.pending, (state) => {
        state.requestError = null;
        state.creatingPostStatus = 'pending';
      })
      .addCase(createPostThunkAction.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
        state.creatingPostStatus = 'fulfilled';
      })
      .addCase(createPostThunkAction.rejected, (state, error) => {
        state.creatingPostStatus = 'rejected';
        state.requestError = JSON.stringify(error);
      });

    builder
      .addCase(updatePostThunkAction.pending, (state) => {
        state.requestError = null;
        state.updatingPostStatus = 'pending';
      })
      .addCase(updatePostThunkAction.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.updatingPostStatus = 'fulfilled';
      })
      .addCase(updatePostThunkAction.rejected, (state, error) => {
        state.updatingPostStatus = 'rejected';
        state.requestError = JSON.stringify(error);
      });

      builder
      .addCase(deletePostThunkAction.pending, (state) => {
        state.requestError = null;
        state.deletingPostStatus = 'pending';
      })
      .addCase(deletePostThunkAction.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.deletingPostStatus = 'fulfilled';
      })
      .addCase(deletePostThunkAction.rejected, (state, error) => {
        state.deletingPostStatus = 'rejected';
        state.requestError = JSON.stringify(error);
      });
  },
});

export const { setPostAction } = postSlice.actions;
export const postReducer = postSlice.reducer;
