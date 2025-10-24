import { useState, type FormEvent } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import './style.css';

export const PostSnippetsForm = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');

  const onCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Отправка сниппета:', { language, code });
  };

  return (
    <div className='form-wrapper'>
      <form className='snippet-form' onSubmit={handleSubmit}>
        <h2 className='form-title'>Create new snippet!</h2>
        <div className='form-group'>
          <label htmlFor='language'>Language of your snippet:</label>
          <select
            id='language'
            name='language'
            className='language-select'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value='javascript'>JavaScript</option>
            <option value='python'>Python</option>
            <option value='typescript'>TypeScript</option>
            <option value='html'>HTML</option>
            <option value='css'>CSS</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='code-editor'>Code of your snippet:</label>

          <CodeMirror
            id='code-editor'
            value={code}
            height='300px'
            extensions={[javascript({ jsx: true })]}
            onChange={onCodeChange}
            className='code-editor'
            theme='light'
          />
        </div>

        <button type='submit' className='submit-button'>
          CREATE SNIPPET
        </button>
      </form>
    </div>
  );
};
