import React, { useEffect } from 'react';

import { useAppDispatch } from 'store/store';
import { fetchAllPostsThunkAction } from 'store/post-reducer/post.thunk-actions';
import { useSelector } from 'react-redux';
import {
  selectAllPosts,
} from 'store/post-reducer/post.selectors';
import { Post } from './components/Post';

import S from './PageMain.module.css';

export const PageMain: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectAllPosts);
  console.log('posts', posts);


  useEffect(() => {
    dispatch(fetchAllPostsThunkAction());
  }, [dispatch]);

  return (
    <div className={S.wrapper}>
      <h1 className={S.title}>Список статей</h1>
        <ul className={S.postList}>
          {posts.map((post) => (
            <Post key={post.id} postId={post.id} text={post.title} />
          ))}
        </ul>
    </div>
  );
};
