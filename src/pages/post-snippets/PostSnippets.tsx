import { useState, type FormEvent, type ChangeEvent } from 'react';
import { PostSnippetsForm } from './PostSnippetsForm';

export const PostSnippets = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');

  const onCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Отправка сниппета:', { language, code });
  };

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <PostSnippetsForm
      handleSubmit={handleSubmit}
      language={language}
      handleChangeLanguage={handleChangeLanguage}
      onCodeChange={onCodeChange}
      code={code}
    />
  );
};
