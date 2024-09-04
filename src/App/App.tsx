import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoute } from 'utils/route/AppRoute';
import { InnerLayout } from 'components/InnerLayout';
import { PageMain } from 'pages/PageMain';
import { PageContent } from 'pages/PageContent';
import { PagePostCreating } from 'pages/PagePostCreating';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.Main()} element={<InnerLayout />}>
        <Route index element={<PageMain />} />
        <Route path={AppRoute.Content()} element={<PageContent />} />
        <Route path={AppRoute.PostCreating()} element={<PagePostCreating />} />
      <Route path="*" element={<Navigate to={AppRoute.Main()} />} />
      </Route>
    </Routes>
  );
};
