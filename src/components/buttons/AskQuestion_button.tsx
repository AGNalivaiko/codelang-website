import { Button } from 'antd';
import { useNavigate } from 'react-router';

export const AskQuestion_button = () => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate('/ask-question');
  };

  return (
    <Button size='middle' style={{ borderRadius: '0px' }} onClick={handleOnclick}>
      Ask Question
    </Button>
  );
};
