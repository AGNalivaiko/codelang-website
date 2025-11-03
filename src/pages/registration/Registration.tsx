import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { notification } from 'antd';
import { useState } from 'react';
import { useSignUp } from '@api';
import { helperForPassword } from './passwordHelper';
import type { FieldType } from './types';

export const Registration = () => {
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);
  const [showUsernameHelp, setShowUsernameHelp] = useState(false);
  const { signUp, isPending, contextHolder } = useSignUp();
  const { Item } = Form;

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const { username, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      notification.info({
        message: 'Пароли не совпадают'
      });
      return;
    }

    signUp({ username, password });
  };

  return (
    <Spin spinning={isPending}>
      {contextHolder}
      <Form
        style={{ margin: '15% auto', maxWidth: 600 }}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
          help={showUsernameHelp && `The user's name must not be shorter than 5 characters.`}
        >
          <Input
            onFocus={() => setShowUsernameHelp(true)}
            onBlur={() => setShowUsernameHelp(false)}
          />
        </Item>

        <Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
          help={showPasswordHelp && <pre>{`${helperForPassword}`}</pre>}
        >
          <Input.Password
            onFocus={() => setShowPasswordHelp(true)}
            onBlur={() => setShowPasswordHelp(false)}
          />
        </Item>

        <Item
          label='Confirm Password'
          name='confirmPassword'
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
      </Form>
    </Spin>
  );
};
