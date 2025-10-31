import { Row, Col, Typography, Divider } from 'antd';
import { ChangeUserName } from './ChangeUserName';
import { ChangePassword } from './ChangePassword';
import styles from '../account.module.css';

const { Title } = Typography;

export const ManageProfile = () => (
  <Row className={styles.manageProfileContainer}>
    <Title level={4} style={{ marginBottom: '20px' }}>
      Edit your profile:
    </Title>

    <Row>
      <ChangeUserName />

      <Col span={2} style={{ display: 'flex', justifyContent: 'center' }}>
        <Divider type='vertical' style={{ height: '100%' }} />
      </Col>

      <ChangePassword />
    </Row>
  </Row>
);
