type RequestInitWithJson = RequestInit & {
  json?: unknown;
  signal?: AbortSignal;
};

export interface QueryResponse<T> {
  data: {
    data: T;
  };
}

const BASE_URL = 'https://codelang.vercel.app/api';

const hasJsonResponse = (response: Response) => {
  let isApplicationJson = false;

  for (const [key, value] of response.headers.entries()) {
    const isJson = key === 'content-type' && value?.includes('application/json');
    const noContent = key === 'content-length' && value === '0';

    if (isJson && !noContent) {
      isApplicationJson = isJson;
    }
  }

  return isApplicationJson;
};

const handleError = async (response: Response) => {
  if (!response.ok) {
    const error = hasJsonResponse(response) ? await response.json() : await response.text();
    const errorMessage = typeof error === 'string' ? error : error?.message;

    throw new Error(errorMessage || 'An unknown error occurred');
  }
};

export const apiInstance = async <T>(url: string, options?: RequestInitWithJson) => {
  const headers = {
    'Content-Type': 'application/json',
    ...(options?.headers ?? {})
  };

  if (options?.json) {
    options.body = JSON.stringify(options.json);
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers
  });

  await handleError(response);

  if (hasJsonResponse(response)) {
    return (await response.json()) as Promise<T>;
  }

  return response as T;
};
