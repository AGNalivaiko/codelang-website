import { javascript } from '@codemirror/lang-javascript';
import ReactCodeMirror from '@uiw/react-codemirror';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router';
import style from './ask-question.module.css';

export const AskQuestion = () => {
  const navigate = useNavigate();
  const [t] = useTranslation('askQuestion');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');

  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  const handleOnclick = () => {
    navigate('/questions');
  };

  const handleSubmit = () => {
    if (title && description) {
      alert('Данные отправлены');
      navigate('/');
    }
  };

  return (
    <div className={style.askQuestionFormContainer}>
      <div className={style.askQuestionFormTitle}>
        {t('title')}
        <Button onClick={handleOnclick}>
          <Link to='/questions'>X</Link>
        </Button>
      </div>
      <Input
        placeholder={t('questionTitle')}
        className={style.askQuestionFormInput}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        placeholder={t('questionDescription')}
        className={style.askQuestionFormButton}
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
      <Button className={style.askQuestionFormCode} onClick={handleSubmit}>
        {t('submit')}
      </Button>
    </div>
  );
};
