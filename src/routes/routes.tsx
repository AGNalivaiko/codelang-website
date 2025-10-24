import { Route, Routes } from 'react-router';
import {
  HomePage,
  MyAccountPage,
  MySnippetPage,
  PostSnippetPage,
  QuestionsPage,
  UsersPage,
  NoMatchPage,
  LogInPage,
  RegisterPage
} from '../pages';
import { AskQuestionPage } from '../pages/ask-question';
import { useAppSelector } from '../hooks';
import { GuestRoutes, PrivateRoute } from './routesGuards/TypeOfRoutes';

export const AppRoutes = () => {
  const isLoggedIn = useAppSelector((state) => state.user.user?.isLoggedIn ?? false);

  return (
    <Routes>
      <Route element={<GuestRoutes isLoggedIn={isLoggedIn} />}>
        <Route path='/login' element={<LogInPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/my-account' element={<MyAccountPage />} />
        <Route path='/my-snippets' element={<MySnippetPage />} />
        <Route path='/post-snippet' element={<PostSnippetPage />} />
        <Route path='/questions' element={<QuestionsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/ask-question' element={<AskQuestionPage />} />
      </Route>

      <Route path='*' element={<NoMatchPage />} />
    </Routes>
  );
};
