import { Form, Input, Button, Col, Typography } from 'antd';
import { useAppDispatch } from '@hooks';
import styles from '../account.module.css';

const { Title } = Typography;
const { Item } = Form;

export const ChangeUserName = () => {
  const dispatch = useAppDispatch();

  const onFinishUsername = (value: { username: string }) => {
    const { username } = value;
    alert('mutation success');
  };

  return (
    <Col span={11}>
      <Title level={5}>Change your username:</Title>
      <Form layout='vertical' onFinish={onFinishUsername} style={{ marginTop: '16px' }}>
        <Item
          name='newUsername'
          rules={[{ required: true, message: 'Please input your new username!' }]}
        >
          <Input placeholder='New username' />
        </Item>
        <Item>
          <Button className={styles.changeUserNameButton} type='primary' htmlType='submit'>
            SAVE
          </Button>
        </Item>
      </Form>
    </Col>
  );
};
