import React from 'react';
import { Link } from 'react-router-dom';

import S from './Post.module.css';
import { AppRoute } from 'utils/route/AppRoute';

interface IPostProps {
  postId: number;
  text: string;
}

export const Post: React.FC<IPostProps> = ({ postId, text }) => {
  return (
    <li className={S.postElement}>
      <Link className={S.link} to={`${AppRoute.Content()}/${postId}`}>
        {text}
      </Link>
    </li>
  );
};
