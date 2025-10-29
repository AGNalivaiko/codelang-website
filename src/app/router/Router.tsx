import { Suspense, type FC, type PropsWithChildren } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import { NoMatchPage, LogInPage, Registration } from '../../pages';
import { Layout } from '../../pages/layout';
import { useCheckAuth } from '../../hooks';
import { ROUTER_PATHS } from '../../constants';
import {
  LazyHomePage,
  LazyMyAccountPage,
  LazyMySnippetPage,
  LazyPostSnippetPage,
  LazyQuestionsPage,
  LazyUsersPage,
  LazyAskQuestionPage
} from './dynamic-pages';
import { Spin } from 'antd';

const SuspenceElement: FC<PropsWithChildren> = ({ children }) => (
  <Suspense fallback={<Spin fullscreen={true} size='large' />}>{children}</Suspense>
);

const PrivateRoute: FC = () => {
  const isLoggedIn = useCheckAuth();

  return isLoggedIn ? (
    <SuspenceElement>
      <Outlet />
    </SuspenceElement>
  ) : (
    <Navigate to={ROUTER_PATHS.LOGIN} replace />
  );
};

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          path={ROUTER_PATHS.HOME}
          element={
            <SuspenceElement>
              <LazyHomePage />
            </SuspenceElement>
          }
        />
        <Route path={ROUTER_PATHS.LOGIN} element={<LogInPage />} />
        <Route path={ROUTER_PATHS.REGISTER} element={<Registration />} />

        <Route element={<PrivateRoute />}>
          <Route path={ROUTER_PATHS.ACCOUNT} element={<LazyMyAccountPage />} />
          <Route path={ROUTER_PATHS.SNIPPETS} element={<LazyMySnippetPage />} />
          <Route path={ROUTER_PATHS.POST_SNIPPET} element={<LazyPostSnippetPage />} />
          <Route path={ROUTER_PATHS.QUESTIONS} element={<LazyQuestionsPage />} />
          <Route path={ROUTER_PATHS.USERS} element={<LazyUsersPage />} />
          <Route path={ROUTER_PATHS.ASK_QUESTION} element={<LazyAskQuestionPage />} />
        </Route>

        <Route path={ROUTER_PATHS.NO_MATCH_PAGE} element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
};
