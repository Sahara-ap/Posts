import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';
import {
  selectPost,
  selectPostStatus,
} from 'store/post-reducer/post.selectors';
import { fetchPostThunkAction, updatePostThunkAction } from 'store/post-reducer/post.thunk-actions';

import { editPost, savePost } from './utils/utils';
import S from './PageContent.module.css';

export const PageContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const post = useSelector(selectPost);
  const isFulfilled = useSelector(selectPostStatus) === 'fulfilled';

  const [isEditMode, setIsEditMode] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [inputTitleValue, setInputTitleValue] = useState('');


  const divRef = useRef<HTMLDivElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const inputTitleRef = useRef<HTMLInputElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)


  const { postId } = useParams();

  const elementMap = {
    div: divRef?.current,
    textarea: textareaRef?.current,
    input: inputTitleRef?.current,
    title: titleRef?.current,
  }

  const handleEditClick = () => {
    editPost(elementMap)
    setIsEditMode(true);
  };

  const handleUpdateClick = () => {
    const body = {
      title: inputTitleValue,
      body: textareaValue,
      userId: 1,
    }
      savePost(elementMap);
      setIsEditMode(false);
    if (postId) {
      dispatch(updatePostThunkAction({postId: Number(postId), body}))
    }
  }

  useEffect(() => {
    dispatch(fetchPostThunkAction(Number(postId)));
  }, [dispatch, postId]);

  useEffect(() => {
    setInputTitleValue(post?.title || '')
    setTextareaValue(post?.body || '');
  }, [dispatch, post?.body, post?.title]);

  return (
    <div className={S.wrapper}>
      {post && isFulfilled && (
        <>
          <h1
            className={S.title}
            ref={titleRef}
          >
            {inputTitleValue}
          </h1>
          <input
            className={`${S.titleInput} visually-hidden`}
            ref={inputTitleRef}
            value={inputTitleValue}
            onChange={({target}) => setInputTitleValue(target.value)}
          />
          <div ref={divRef} className={S.postContent}>{textareaValue}</div>
          <textarea
            className={`${S.textArea} visually-hidden`}
            ref={textareaRef}
            value={textareaValue}
            onChange={({target}) => setTextareaValue(target.value)}
          ></textarea>
          <button
            className={S.editButton}
            onClick={isEditMode ? handleUpdateClick : handleEditClick}
          >
            {isEditMode ? 'Сохранить' : 'Редактировать'}
          </button>
        </>
      )}
    </div>
  );
};
