import { Button, Checkbox, Flex, Form, Input, Spin, type FormProps } from 'antd';
import { Link } from 'react-router';
import { useLogIn } from '@api';

export type FieldType = {
  username: string;
  password: string;
  confirmPassword: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const LogInPage = () => {
  const { login, isPending, contextHolder } = useLogIn();
  const { Item } = Form;

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (values) {
      login(values);
      localStorage.setItem('password', values.password);
    }
  };

  return (
    <Spin spinning={isPending}>
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
      {contextHolder}
    </Spin>
  );
};
