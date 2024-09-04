import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoute } from 'utils/route/AppRoute';
import { InnerLayout } from 'components/InnerLayout';
import { PageForm1 } from 'pages/PageForm1';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home()} element={<InnerLayout />}>
        <Route index element={<Navigate to={AppRoute.Form1()} />} />
        <Route path={AppRoute.MainPage()} element={<PageMain />} />
        <Route path={AppRoute.ContentPage()} element={<PageForm1 />} />
        <Route path={AppRoute.ConstructorPage()} element={<PageForm1 />} />
      <Route path="*" element={<Navigate to={AppRoute.Home()} />} />
      </Route>
    </Routes>
  );
};
