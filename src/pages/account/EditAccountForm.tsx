import { Form, Input, Button, Row, Col, Typography, Divider, message } from 'antd';
import { patchUsername } from './pathcUserName';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from '../../hooks';
import { setUser } from '../../store/slices/auth';

const { Title } = Typography;

export const EditAccountForm = () => {
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

  const onFinishPassword = () => {
    message.success('Password successfully changed!');
  };

  return (
    <div
      style={{
        maxWidth: '90%',
        margin: '2% auto 0',
        padding: '15px',
        border: '1px solid #f0f0f0',
        borderRadius: 8
      }}
    >
      <Title level={4} style={{ marginBottom: '20px' }}>
        Edit your profile:
      </Title>

      <Row>
        {/* --- КОЛОНКА 1: СМЕНА ИМЕНИ --- */}
        <Col span={11}>
          <Title level={5}>Change your username:</Title>
          <Form layout='vertical' onFinish={onFinishUsername} style={{ marginTop: '16px' }}>
            <Form.Item
              name='newUsername'
              rules={[{ required: true, message: 'Please input your new username!' }]}
            >
              <Input placeholder='New username' />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                style={{ backgroundColor: '#52c41a', borderColor: '#52c41a', width: '100%' }}
              >
                SAVE
              </Button>
            </Form.Item>
          </Form>
        </Col>

        {/* --- РАЗДЕЛИТЕЛЬ --- */}
        <Col span={2} style={{ display: 'flex', justifyContent: 'center' }}>
          <Divider type='vertical' style={{ height: '100%' }} />
        </Col>

        {/* --- КОЛОНКА 2: СМЕНА ПАРОЛЯ --- */}
        <Col span={11}>
          <Title level={5}>Change your password:</Title>
          <Form layout='vertical' onFinish={onFinishPassword} style={{ marginTop: '16px' }}>
            <Form.Item
              name='oldPassword'
              rules={[{ required: true, message: 'Please input your old password!' }]}
            >
              <Input.Password placeholder='Old password' />
            </Form.Item>

            <Form.Item
              name='newPassword'
              rules={[{ required: true, message: 'Please input your new password!' }]}
            >
              <Input.Password placeholder='New password' />
            </Form.Item>

            <Form.Item
              name='confirmPassword'
              dependencies={['newPassword']}
              rules={[
                { required: true, message: 'Please confirm your new password!' },
                // Проверка, что пароли совпадают
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  }
                })
              ]}
            >
              <Input.Password placeholder='Confirm password' />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' className='edit-profile-buttons'>
                CHANGE PASSWORD
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
