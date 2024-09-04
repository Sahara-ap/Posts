import React from 'react';
import { Link } from 'react-router-dom';

import S from './Post.module.css';
import { AppRoute } from 'utils/route/AppRoute';

interface IPostProps {
  postId: number;
  text: string;
  onClick: (postId: number) => void
}

export const Post: React.FC<IPostProps> = ({ postId, text, onClick }) => {

  return (
    <li className={S.postElement}>
      <Link className={S.link} to={`${AppRoute.Content()}/${postId}`}>
        {text}
      </Link>
      <button
        className={S.deleteButton}
        onClick={() => onClick(postId)}
      >Удалить</button>
    </li>
  );
};
