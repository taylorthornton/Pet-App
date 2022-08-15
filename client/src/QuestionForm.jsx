import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useState } from 'react';

import { allAnswers } from './atoms';

function QuestionForm() {
  const allResponses = useRecoilValue(allAnswers);
  const [search, setSearch] = useState('');
  const [question, setQuestion] = useState([]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion(search);
  };

  return (
    <OuterDiv>
      <SpaceDiv>
        <form onSubmit={handleSubmit}>
          <TextSpan>
          Is
          &nbsp;
          </TextSpan>
          <input
            type='text' value={search} onChange={updateSearch}
          />
          <TextSpan>
          &nbsp;
          toxic to my cat/dog?
          &nbsp;
          </TextSpan>
          <input type='submit' value='Submit'/>
        </form>
      </SpaceDiv>
      <InnerDiv>
        {question[0] !== undefined &&
          <div>
          {question} is {allResponses[question]} to your pet.
          </div>
        }
      </InnerDiv>

    </OuterDiv>
  );
}

export default QuestionForm;

const TextSpan = styled.span`
  /* padding-right: 5vh;
  padding-top: 5vh;
  padding-bottom: 5vh:
  padding-left: 5vh; */
  /* margin: auto; */
  justify-content: space-between;
  /* align-self: center; */
`
const OuterDiv = styled.div`
  /* padding-right: 2vh;
  padding-top: 2vh;
  padding-bottom: 2vh:
  padding-left: 2vh; */
  display: flex;
  flex-direction: column;
  margin: 2vh;
  justify-content: space-between;
  /* align-self: center; */
`
const InnerDiv = styled.div`
  padding-right: 2vh;
  padding-top: 2vh;
  padding-bottom: 2vh:
  padding-left: 2vh;
  display: flex;
  margin: 2vh;
  justify-content: space-between;
  align-self: center;
`
const SpaceDiv = styled.span`
  /* padding-right: 5vh;
  padding-top: 5vh;
  padding-bottom: 5vh:
  padding-left: 5vh; */
  /* margin: auto; */
`