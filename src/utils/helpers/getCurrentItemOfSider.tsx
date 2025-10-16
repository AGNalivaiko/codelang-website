export const getCurrentItemOfSider = (pathname: string) => {
  switch (pathname) {
    case '/':
      return ['1'];
    case '/my-account':
      return ['2'];
    case '/post-snippet':
      return ['3'];
    case '/my-snippets':
      return ['4'];
    case '/questions':
      return ['5'];
    case '/users':
      return ['6'];
    default:
      return ['1'];
  }
};
