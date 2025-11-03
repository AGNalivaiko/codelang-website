import { Flex, Form, Input, Checkbox, Button } from 'antd';
import type { FC } from 'react';
import { Link } from 'react-router';
import type { LoginFormProps } from './types';

export const LoginForm: FC<LoginFormProps> = ({ onFinish, onFinishFailed }) => {
  const { Item } = Form;
  return (
    <Flex justify='center'>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, marginTop: 250 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Item>

        <Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Item>

        <Item name='remember' valuePropName='checked' label={null}>
          <Checkbox>Remember me</Checkbox>
        </Item>

        <Item label={null}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Item>

        <Item label={'No profile?'} style={{ display: 'flex' }}>
          <Button type='text' htmlType='submit' style={{ marginRight: 20 }}>
            <Link to='/register'>Registration</Link>
          </Button>
        </Item>
      </Form>
    </Flex>
  );
};
