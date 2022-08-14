import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useState } from 'react';

import { allAnswers } from './atoms';

function QuestionForm() {
  const allResponses = useRecoilValue(allAnswers);
  const [search, setSearch] = useState('');
  const [question, setQuestion] = useState([]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion(search);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          Is
          <input
            type='text' value={search} onChange={updateSearch}
          />
          toxic to my cat/dog?
          <input type='submit' value='Submit'/>
        </form>
      </div>
      <div>
        {question &&
          <div>
          {question} is {allResponses[question]} to your pet.
          </div>
        }
      </div>

    </div>
  );
}

export default QuestionForm;