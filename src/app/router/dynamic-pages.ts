import { lazy } from 'react';

export const LazyHomePage = lazy(() =>
  import('../../pages/home').then((module) => ({ default: module.HomePage }))
);

export const LazyMyAccountPage = lazy(() =>
  import('../../pages/my-account').then((module) => ({ default: module.MyAccountPage }))
);

export const LazyMySnippetPage = lazy(() =>
  import('../../pages/my-snippets').then((module) => ({ default: module.MySnippetPage }))
);

export const LazyPostSnippetPage = lazy(() =>
  import('../../pages/post-snippet').then((module) => ({ default: module.PostSnippetPage }))
);

export const LazyQuestionsPage = lazy(() =>
  import('../../pages/questions').then((module) => ({ default: module.QuestionsPage }))
);

export const LazyUsersPage = lazy(() =>
  import('../../pages/users').then((module) => ({ default: module.UsersPage }))
);

export const LazyAskQuestionPage = lazy(() =>
  import('../../pages/ask-question').then((module) => ({ default: module.AskQuestionPage }))
);
