
import styled from 'styled-components';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import Container from '@mui/material/Container';

import QuestionForm from './QuestionForm';
import Appointments from './Appointments';

const PetApp = function WhateverStupidName() {

  return (
    <MainDiv>
      <MainHeader>
      MyPet
      </MainHeader>
      <br />
      <QuestionDiv>
        <QuestionForm />
      </QuestionDiv>
      <br />
      <AppointmentDiv>
        <Appointments />
      </AppointmentDiv>
    </MainDiv>
  );
};

export default PetApp;


const MainDiv = styled.div`
  border-radius: 3px;
  border: 2px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  padding-right: 5vh;
  padding-top: 5vh;
  padding-bottom: 5vh:
  padding-left: 5vh;
`
const QuestionDiv = styled.div`
  border-radius: 3px;
  border: 2px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-right: 5vh;
  padding-top: 5vh;
  padding-bottom: 5vh:
  padding-left: 5vh;
  justify-content: space-between;
`
const AppointmentDiv = styled.div`
  border-radius: 3px;
  border: 2px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  /* padding-right: 5vh;
  padding-top: 5vh;
  padding-bottom: 5vh:
  padding-left: 5vh; */
  justify-content: space-around;
`
const MainHeader = styled.h1`
  border-radius: 3px;
  border: 2px solid blue;
  margin: auto;
  display: flex;
  flex-direction: column;
  /* align-self: center; */
  /* padding-right: 1vh;
  padding-top: 1vh;
  padding-bottom: 1vh:
  padding-left: 1vh; */
  justify-content: space-around;
`