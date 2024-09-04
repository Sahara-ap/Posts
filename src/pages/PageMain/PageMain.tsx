import React from 'react';

import { Post } from './components/Post';

import S from './PageMain.module.css';
import { IPostResponse } from 'store/api/types/post-response.interface';

interface IPostsPageMainProps {
  posts: IPostResponse[];
}
export const PageMain: React.FC<IPostsPageMainProps> = ({posts}) => {

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
