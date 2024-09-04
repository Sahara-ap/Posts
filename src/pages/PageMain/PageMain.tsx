import React from 'react';
import { Post } from './components/Post';

import { IPostResponse } from 'store/api/types/post-response.interface';
import { useAppDispatch } from 'store/store';
import { deletePostThunkAction } from 'store/post-reducer/post.thunk-actions';

import S from './PageMain.module.css';

interface IPostsPageMainProps {
  posts: IPostResponse[];
}
export const PageMain: React.FC<IPostsPageMainProps> = ({posts}) => {
  const dispatch = useAppDispatch();
  const handleDeleteButtonClick = (postId:number) => {
    dispatch(deletePostThunkAction(postId))
  }

  return (
    <div className={S.wrapper}>
      <h1 className={S.title}>Список статей</h1>
        <ul className={S.postList}>
          {posts.map((post) => (
            <Post key={post.id} postId={post.id} text={post.title} onClick={handleDeleteButtonClick}/>
          ))}
        </ul>
    </div>
  );
};
