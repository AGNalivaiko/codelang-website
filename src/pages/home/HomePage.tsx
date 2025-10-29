import { Typography } from 'antd';

export const HomePage = () => {
  return (
    <Typography.Title style={{ textAlign: 'center' }}>
      {
        <pre style={{ backgroundColor: 'white', border: 'none', display: 'inline-block' }}>
          {`Welcome to Codelang!
</>`}
        </pre>
      }
    </Typography.Title>
  );
};
