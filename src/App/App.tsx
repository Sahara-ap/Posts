import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoute } from 'utils/route/AppRoute';
import { InnerLayout } from 'components/InnerLayout';
import { PageMain } from 'pages/PageMain';
import { PageContent } from 'pages/PageContent';
import { PagePostCreating } from 'pages/PagePostCreating';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';
import { selectAllPosts } from 'store/post-reducer/post.selectors';
import { fetchAllPostsThunkAction } from 'store/post-reducer/post.thunk-actions';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectAllPosts);


  useEffect(() => {
    dispatch(fetchAllPostsThunkAction());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={AppRoute.Main()} element={<InnerLayout />}>
        <Route index element={<PageMain posts={posts}/>} />
        <Route path={`${AppRoute.Content()}/:postId`} element={<PageContent />} />
        <Route path={AppRoute.PostCreating()} element={<PagePostCreating />} />
      <Route path="*" element={<Navigate to={AppRoute.Main()} />} />
      </Route>
    </Routes>
  );
};
