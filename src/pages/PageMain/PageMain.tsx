import React, { useState } from 'react';
import { Post } from './components/Post';

import { IPostResponse } from 'store/api/types/post-response.interface';
import { useAppDispatch } from 'store/store';
import { deletePostThunkAction } from 'store/post-reducer/post.thunk-actions';

import { INITIAL_NUMBER_POSTS } from 'App/constants/constants';
import S from './PageMain.module.css';

interface IPostsPageMainProps {
  posts: IPostResponse[];
}
export const PageMain: React.FC<IPostsPageMainProps> = ({ posts }) => {
  const [countPosts, setCountPosts] = useState(INITIAL_NUMBER_POSTS);
  const shownPosts = posts.slice(0, countPosts);
  const isMoreButtonVisible = posts.length > shownPosts.length;

  const dispatch = useAppDispatch();
  const handleDeleteButtonClick = (postId: number) => {
    dispatch(deletePostThunkAction(postId));
  };

  const handleMoreClick = () => {
    setCountPosts((prev) => prev + INITIAL_NUMBER_POSTS);
    const height = document.body.scrollHeight + 50;
    setTimeout(() => {
      window.scrollTo(0, height);
    }, 0);
  };

  return (
    <div className={S.wrapper}>
      <h1 className={S.title}>Список статей</h1>
      <ul className={S.postList}>
        {shownPosts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            text={post.title}
            onClick={handleDeleteButtonClick}
          />
        ))}
      </ul>
      {isMoreButtonVisible && (
        <button className={S.more} onClick={handleMoreClick}>
          Еще
        </button>
      )}
    </div>
  );
};
