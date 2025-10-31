import { Row } from 'antd';
import { Profile } from './profile';
import { ManageProfile } from './ManageProfile';
import style from './account.module.css';

export const Account = () => (
  <Row className={style.accountContainer}>
    <Profile />
    <ManageProfile />
  </Row>
);
