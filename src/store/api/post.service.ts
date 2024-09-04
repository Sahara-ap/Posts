import { jsonApi } from './api';

import { IPostResponse } from './types/post-response.interface';
import { IPostRequestBody } from './types/post-request-body.interface';
import { ApiRoute } from './routes';


export const requestAllPosts = async (): Promise<IPostResponse[]> =>
  await jsonApi.get(ApiRoute .AllPosts()).then((res) => res?.data);

export const requestPost = async (postId: number): Promise<IPostResponse> =>
  await jsonApi.get(ApiRoute.Post(postId)).then((res) => res?.data);

export const requestPostCreating = async (body: IPostRequestBody): Promise<IPostResponse> =>
  await jsonApi.post(ApiRoute.CreatePost(), body).then((res) => res?.data);

export const requestPostUpdating = async ({postId, body}: {postId: number; body: IPostRequestBody}): Promise<IPostResponse> =>
  await jsonApi.put(ApiRoute.Post(postId), body).then((res) => res?.data);

export const requestPostDeleting = async (postId: number): Promise<void> =>
  await jsonApi.delete(ApiRoute.Post(postId)).then((res) => res?.data);
