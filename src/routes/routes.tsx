import { Route, Routes } from 'react-router';
import {
  HomePage,
  MyAccountPage,
  MySnippetPage,
  PostSnippetPage,
  QuestionsPage,
  UsersPage,
  NoMatchPage,
  LogInPage
} from '../pages';
import { AskQuestionPage } from '../pages/ask-question';

export const AppRoutes = () => {
  const navigationRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/my-account', element: <MyAccountPage /> },
    { path: '/my-snippets', element: <MySnippetPage /> },
    { path: '/post-snippet', element: <PostSnippetPage /> },
    { path: '/questions', element: <QuestionsPage /> },
    { path: '/users', element: <UsersPage /> },
    { path: '/ask-question', element: <AskQuestionPage /> },
    { path: '*', element: <NoMatchPage /> },
    { path: '/login', element: <LogInPage /> }
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};
