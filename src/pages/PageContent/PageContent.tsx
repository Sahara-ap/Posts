import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';
import { selectPost, selectPostStatus } from 'store/post-reducer/post.selectors';
import { fetchPostThunkAction } from 'store/post-reducer/post.thunk-actions';

import S from './PageContent.module.css';

export const PageContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const post = useSelector(selectPost);
  const isFulfilled = useSelector(selectPostStatus) === 'fulfilled';

  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchPostThunkAction(Number(postId)));
  }, [dispatch, postId]);

  return (
    <div className={S.wrapper}>
      {post && isFulfilled && (
        <>
          <h1 className={S.title}>{post.title}</h1>
          <div className={S.postContent}>{post.body}</div>
        </>
      )}
    </div>
  );
};
