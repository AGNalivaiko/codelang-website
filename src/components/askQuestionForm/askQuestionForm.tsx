import { Button, Input } from 'antd';

import './style.css';

export const AskQuestionForm = () => {
  return (
    <div className='ask-question-form-container'>
      <div className='ask-question-form-title'>
        Ask a question
        <Button className='ask-question-form-button'>X</Button>
      </div>
      <Input placeholder='Question title' className='ask-question-form-input' />
      <Input placeholder='Question description' className='ask-question-form-input' />
      <Button variant='text' className='ask-question-form-button'>
        Submit
      </Button>
    </div>
  );
};
