import { Row } from 'antd';
import styles from '../account.module.css';
import { ProfileInfo } from './ProfileInfo';
import { ProfileStats } from './ProfileStats';
import { ProfileTitle } from './ProfileTitle';

export const Profile = () => (
  <>
    <ProfileTitle />

    <Row className={styles.profileDetailsContainer}>
      <ProfileInfo />
      <ProfileStats />
    </Row>
  </>
);
