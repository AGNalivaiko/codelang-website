import { Button } from 'antd';
import { Link } from 'react-router';

export const AskQuestion_button = () => {
  return (
    <Button size='middle' style={{ borderRadius: '0px' }}>
      <Link to='/ask-question'>Ask Question</Link>
    </Button>
  );
};
