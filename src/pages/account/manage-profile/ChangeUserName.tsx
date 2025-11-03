import { useMutation } from '@tanstack/react-query';
import { Form, Input, Button, Col, Typography, message } from 'antd';
import { useAppDispatch } from '@hooks';
import { setUser } from '@store';
import styles from '../account.module.css';
import { patchUsername } from '../pathcUserName';

const { Title } = Typography;
const { Item } = Form;

export const ChangeUserName = () => {
  const dispatch = useAppDispatch();
  const mutation = useMutation({
    mutationFn: patchUsername,
    mutationKey: ['changeUserName'],

    onSuccess: (dataFromServer) => {
      dispatch(setUser(dataFromServer));
      message.success('Username successfully changed!');
    }
  });

  const onFinishUsername = (value: { username: string }) => {
    const { username } = value;
    mutation.mutate(username);
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
