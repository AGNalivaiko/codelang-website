import { Route, Routes } from 'react-router';
import {
  HomePage,
  MyAccountPage,
  MySnippetPage,
  PostSnippetPage,
  QuestionsPage,
  UsersPage,
  NoMatchPage
} from '../pages';

export const AppRoutes = () => {
  const navigationRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/my-account', element: <MyAccountPage /> },
    { path: '/my-snippets', element: <MySnippetPage /> },
    { path: '/post-snippet', element: <PostSnippetPage /> },
    { path: '/questions', element: <QuestionsPage /> },
    { path: '/users', element: <UsersPage /> },
    { path: '*', element: <NoMatchPage /> }
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};
