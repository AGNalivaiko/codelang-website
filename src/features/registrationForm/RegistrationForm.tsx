import { useMutation } from '@tanstack/react-query';
import './style.css';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { postQuestion } from './postRegistration';
import type { FieldType } from './types';
import { useNavigate, Link } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUser } from '../../store/slices/auth';

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authedUser = useAppSelector((state) => state.user.user);

  if (authedUser) {
    <Button>
      <Link to='/login'>Войти в профиль</Link>
    </Button>;
  }

  const mutation = useMutation({
    mutationFn: postQuestion,
    mutationKey: ['register'],
    onSuccess: (data) => {
      const userData = data?.data;
      localStorage.setItem('user', JSON.stringify(userData));
      dispatch(
        setUser({
          id: userData.id,
          username: userData.username,
          role: userData.role
        })
      );
      message.success('Account was sucessfully registred', 1);
      navigate('/');
    },
    onError: async (error) => {
      alert('Ошибка регистрации');
      console.log('Ошибк при регистрации:', error.message);
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
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
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
  );
};
