import { lazy } from 'react';

export const LazyHomePage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.HomePage }))
);

export const LazyMyAccountPage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.Account }))
);

export const LazyMySnippetPage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.Snippets }))
);

export const LazyPostSnippetPage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.PostSnippets }))
);

export const LazyQuestionsPage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.Questions }))
);

export const LazyUsersPage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.Users }))
);

export const LazyAskQuestionPage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.AskQuestion }))
);
