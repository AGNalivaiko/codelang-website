import { Row } from 'antd';
import { Profile } from './Profile';
import { ManageProfile } from './ManageProfile';

export const Account = () => (
  <Row
    style={{
      width: '100%',
      flexDirection: 'column',
      gap: '20px',
      padding: '0 5%'
    }}
  >
    <Profile />
    <ManageProfile />
  </Row>
);
