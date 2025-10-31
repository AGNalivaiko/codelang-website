import { Button, Col, Form, Input, message, Typography } from 'antd';
import type { FC } from 'react';

const { Title } = Typography;
const { Item } = Form;

export const ChangePassword: FC = () => {
  const onFinishPassword = () => {
    message.success('Password successfully changed!');
  };

  return (
    <Col span={11}>
      <Title level={5}>Change your password:</Title>
      <Form layout='vertical' onFinish={onFinishPassword} style={{ marginTop: '16px' }}>
        <Item
          name='oldPassword'
          rules={[{ required: true, message: 'Please input your old password!' }]}
        >
          <Input.Password placeholder='Old password' />
        </Item>

        <Item
          name='newPassword'
          rules={[{ required: true, message: 'Please input your new password!' }]}
        >
          <Input.Password placeholder='New password' />
        </Item>

        <Item
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
        </Item>

        <Item>
          <Button type='primary' htmlType='submit' className='edit-profile-buttons'>
            CHANGE PASSWORD
          </Button>
        </Item>
      </Form>
    </Col>
  );
};
