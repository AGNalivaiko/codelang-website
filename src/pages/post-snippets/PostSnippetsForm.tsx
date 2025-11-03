import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import type { FC, FormEvent, ChangeEventHandler } from 'react';
import style from './post-snippets.module.css';

type PostSnippetsFormProp = {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  language: string;
  handleChangeLanguage: ChangeEventHandler<HTMLSelectElement>;
  onCodeChange: (value: string) => void;
  code: string;
};

export const PostSnippetsForm: FC<PostSnippetsFormProp> = ({
  handleSubmit,
  language,
  handleChangeLanguage,
  onCodeChange,
  code
}) => {
  return (
    <div className={style.formWrapper}>
      <form className={style.snippetForm} onSubmit={handleSubmit}>
        <h2 className={style.formTitle}>Create new snippet!</h2>

        <div className={style.formGroup}>
          <label htmlFor='language'>Language of your snippet:</label>
          <select
            id='language'
            name='language'
            className={style.languageSelect}
            value={language}
            onChange={handleChangeLanguage}
          >
            <option value='javascript'>JavaScript</option>
            <option value='python'>Python</option>
            <option value='typescript'>TypeScript</option>
            <option value='html'>HTML</option>
            <option value='css'>CSS</option>
          </select>
        </div>

        <div className={style.formGroup}>
          <label htmlFor='code-editor'>Code of your snippet:</label>
          <CodeMirror
            id='code-editor'
            value={code}
            height='300px'
            extensions={[javascript({ jsx: true })]}
            onChange={onCodeChange}
            className={style.codeEditor}
            theme='light'
          />
        </div>

        <button type='submit' className={style.submitButton}>
          CREATE SNIPPET
        </button>
      </form>
    </div>
  );
};
