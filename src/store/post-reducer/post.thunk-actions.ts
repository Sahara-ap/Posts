import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestAllPosts, requestPost, requestPostCreating, requestPostDeleting, requestPostUpdating } from 'store/api/post.service';
import { IPostRequestBody } from 'store/api/types/post-request-body.interface';
import { IPostResponse } from 'store/api/types/post-response.interface';
import { TRootState } from 'store/store';
import { notifyError, notifySuccess } from 'utils/notify/notify.utils';

export const fetchAllPostsThunkAction = createAsyncThunk(
  'posts/fetchAll',
  async (): Promise<IPostResponse[]> => {
    return await requestAllPosts()
      .then((res) => (res))
      .catch((error) => {
        notifyError("Sorry can't handle your request at this moment");
        throw error;
      });
  },
);

export const fetchPostThunkAction = createAsyncThunk(
  'posts/fetchOne',
  async (postId: number): Promise<IPostResponse> => {
    return await requestPost(postId)
      .then((res) => (res))
      .catch((error) => {
        notifyError("Sorry can't handle your request at this moment");
        throw error;
      });
  },
);

export const createPostThunkAction = createAsyncThunk(
  'posts/createOne',
  async ({body, onSuccessCb}: {body:IPostRequestBody, onSuccessCb: () => void}): Promise<IPostResponse> => {
    return await requestPostCreating(body)
      .then((res) => {
        onSuccessCb();
        notifySuccess("Your post was successfully created")
        return res;
      })
      .catch((error) => {
        notifyError("Sorry can't handle your request at this moment");
        throw error;
      });
  },
);

export const updatePostThunkAction = createAsyncThunk(
  'posts/updateOne',
  async (
    {postId, body}: {postId: number; body: IPostRequestBody},
    {getState},
  ): Promise<IPostResponse[]> => {

    return await requestPostUpdating({postId, body})
      .then((res) => {
        const state = getState() as TRootState;
        const postIndex = state.postReducer.posts.findIndex((post) => post.id === res.id);
        let updatedPosts: IPostResponse[] = [];
        if (postIndex) {
          updatedPosts = state.postReducer.posts
            .slice()
            .splice(postIndex, 1, res);
        }
        return updatedPosts ;
      })
      .catch((error) => {
        notifyError("Sorry can't handle your request at this moment");
        throw error;
      });
  },
);

export const deletePostThunkAction = createAsyncThunk(
  'posts/deleteOne',
  async (
    postId: number,
    {getState},
  ): Promise<IPostResponse[]> => {
    return await requestPostDeleting(postId)
      .then(() => {
        const state = getState() as TRootState;
        const postIndex = state.postReducer.posts.findIndex((post) => post.id === postId);
        let updatedPostsWithDeleting: IPostResponse[] = [];
        if (postIndex) {
          updatedPostsWithDeleting = state.postReducer.posts
            .slice()
            .splice(postIndex, 1);
        }
        return updatedPostsWithDeleting ;
      })
      .catch((error) => {
        notifyError("Sorry can't handle your request at this moment");
        throw error;
      });
  },
);
