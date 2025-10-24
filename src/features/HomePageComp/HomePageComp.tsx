import { Typography } from 'antd';
import './style.css';

const { Title } = Typography;
const greeting = `Welcome to Codelang!
</>`;

export const HomePageComp = () => {
  return (
    <Title className='homepage-container'>
      {<pre className='homepage-container-greeting'>{greeting}</pre>}
    </Title>
  );
};
