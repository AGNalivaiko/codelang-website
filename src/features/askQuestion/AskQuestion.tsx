import { Button, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router';
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { postQuestion } from '../../components/askQuestionForm/postQuestion';

export const AskQuestion = () => {
  const navigate = useNavigate();
  const [t] = useTranslation('askQuestion');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');

  const mutate = useMutation({
    mutationFn: postQuestion,
    mutationKey: ['postQuestion']
  });

  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  const handleOnclick = () => {
    navigate('/questions');
  };

  const handleSumbit = () => {
    if (!title || !description) {
      message.warning('Please fill in all fields.');
    }

    mutate.mutate({
      title,
      description,
      code
    });
  };

  return (
    <div className='ask-question-form-container'>
      <div className='ask-question-form-title'>
        {t('title')}
        <Button onClick={handleOnclick}>
          <Link to='/questions'>X</Link>
        </Button>
      </div>
      <Input
        placeholder={t('questionTitle')}
        className='ask-question-form-input'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        placeholder={t('questionDescription')}
        className='ask-question-form-input'
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div className='ask-question-form-code'>{t('attachedCode')}</div>
      <ReactCodeMirror
        value={code}
        height='300px'
        extensions={[javascript({ jsx: true })]}
        onChange={handleCodeChange}
      />
      <Button className='ask-question-form-button' onClick={handleSumbit}>
        {t('submit')}
      </Button>
    </div>
  );
};
