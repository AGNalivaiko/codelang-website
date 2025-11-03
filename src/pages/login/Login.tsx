import { Spin, type FormProps } from 'antd';
import { useLogIn } from '@api';
import { LoginForm } from './LogInForm';
import type { FieldType } from './types';

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const LogInPage = () => {
  const { login, isPending, contextHolder } = useLogIn();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (values) {
      login(values);
      localStorage.setItem('password', values.password);
    }
  };

  return (
    <Spin spinning={isPending}>
      <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
      {contextHolder}
    </Spin>
  );
};
