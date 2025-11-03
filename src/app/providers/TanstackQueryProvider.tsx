import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { lazy, Suspense, useEffect, useState, type FC, type PropsWithChildren } from 'react';
import { queryClient } from '@configs';

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools
  }))
);

export const TanstackQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const isDevMode = import.meta.env.DEV;
  const [showDevtools, setShowDevtools] = useState(isDevMode);

  const shouldShowDevtools = isDevMode && showDevtools;
  const shouldShowDevtoolsInProduction = !isDevMode && showDevtools;

  useEffect(() => {
    // @ts-expect-error: According to docs
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {shouldShowDevtools && <ReactQueryDevtools initialIsOpen={false} position='bottom' />}

      {shouldShowDevtoolsInProduction && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  );
};
