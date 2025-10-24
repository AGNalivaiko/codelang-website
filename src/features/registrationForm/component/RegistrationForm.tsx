import { useMutation } from '@tanstack/react-query';
import './style.css';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import { postQuestion } from '../services/postRegistration';
import type { FieldType } from '../types';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { helperForPassword } from './passwordHelper';

export const RegistrationForm = () => {
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);
  const [showUsernameHelp, setShowUsernameHelp] = useState(false);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postQuestion,
    mutationKey: ['register'],
    onSuccess: () => {
      message.success('Account was successfully registred', 1);
      navigate('/login');
    },
    onError: async (error) => {
      alert('Ошибка регистрации');
      console.log('Ошибка при регистрации:', error.message);
    }
  });

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const { username, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    mutation.mutate({ username, password });
  };

  return (
    <Spin spinning={mutation.isPending}>
      <Form
        className='form-container'
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
          help={showUsernameHelp && `Имя пользователя должно быть не менее 5 символов`}
        >
          <Input
            onFocus={() => {
              setShowUsernameHelp(true);
            }}
            onBlur={() => {
              setShowUsernameHelp(false);
            }}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
          help={showPasswordHelp && <pre>{`${helperForPassword}`}</pre>}
        >
          <Input.Password
            onFocus={() => setShowPasswordHelp(true)}
            onBlur={() => setShowPasswordHelp(false)}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label='Confirm Password'
          name='confirmPassword'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name='remember' valuePropName='checked' label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};
