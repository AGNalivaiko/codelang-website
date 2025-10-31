import { Row } from 'antd';
import { ProfileInfo } from './ProfileInfo';
import { ProfileStats } from './ProfileStats';
import { ProfileTitle } from './ProfileTitle';
import styles from '../account.module.css';

export const Profile = () => (
  <>
    <ProfileTitle />

    <Row className={styles.profileDetailsContainer}>
      <ProfileInfo />
      <ProfileStats />
    </Row>
  </>
);
