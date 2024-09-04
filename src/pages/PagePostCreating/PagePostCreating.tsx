import React, { useRef, useState } from 'react';

import S from './PagePostCreating.module.css';
import { useAppDispatch } from 'store/store';
import { createPostThunkAction } from 'store/post-reducer/post.thunk-actions';

export const PagePostCreating: React.FC = () => {
const dispatch = useAppDispatch();
const [title, setTitle] = useState('');
const [text, setText] = useState('');

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const resetForm = () => {
      setTitle('');
      setText('')
    }
    const body = {
      title,
      body: text,
      userId: 1,
    }
    dispatch(createPostThunkAction({
      body,
      onSuccessCb: () => resetForm()
    }))
  }

  return (
    <div className={S.wrapper}>
      <>
        <h1 className={S.title}>Create</h1>
        <form onSubmit={handleSubmitForm}>
          <div className={S.contentWrapper}>
            <input
            className={S.titleField}
            name='title'
            placeholder='Заголовок'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            />
            <textarea
              className={S.textField}
              name='text'
              autoFocus={true}
              placeholder='Текст поста'
              value={text}
              onChange={(event) => setText(event.target.value)}
              required
            >

            </textarea>
          </div>
          <button
          className={S.sendButton}
          >
            Отправить
          </button>
        </form>
      </>
    </div>
  );
};
