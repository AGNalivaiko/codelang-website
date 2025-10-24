import { Button, Checkbox, Flex, Form, Input, message, Spin, type FormProps } from 'antd';
import type { FieldType } from '../../registrationForm/types';
import { Link, useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '../service/postLogin';
import { useAppDispatch } from '../../../hooks';
import { setUser } from '../../../store/slices/auth';

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: postLogin,
    mutationKey: ['login'],

    onSuccess: (data) => {
      const userData = data?.data;
      localStorage.setItem('user', JSON.stringify(userData));
      dispatch(
        setUser({
          id: userData.id,
          username: userData.username,
          role: userData.role,
          isLoggedIn: true
        })
      );
      message.success('Вы успешно авторизовались');
      navigate('/');
    }
  });

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (values) {
      mutation.mutate(values);
    }
  };

  return (
    <Spin spinning={mutation.isPending}>
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

          <Form.Item<FieldType> name='remember' valuePropName='checked' label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>

          <Form.Item label={'No profile?'} style={{ display: 'flex' }}>
            <Button type='text' htmlType='submit' style={{ marginRight: 20 }}>
              <Link to='/register'>Registration</Link>
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Spin>
  );
};
