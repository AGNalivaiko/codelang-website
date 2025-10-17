import { useMutation } from '@tanstack/react-query';
import './style.css';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { postQuestion } from './postRegistration';

type FieldType = {
  username: string;
  password: string;
  confirmPassword: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const RegistrationForm = () => {
  const mutation = useMutation({
    mutationFn: postQuestion,
    mutationKey: ['register']
  });

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const { username, password } = values;
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
