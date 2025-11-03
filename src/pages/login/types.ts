import type { FormProps } from 'antd';

export type FieldType = {
  username: string;
  password: string;
  remember?: boolean;
};

export type LoginFormProps = {
  onFinish: FormProps<FieldType>['onFinish'];
  onFinishFailed: FormProps<FieldType>['onFinishFailed'];
};
