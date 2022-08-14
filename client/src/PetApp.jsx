
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';

import QuestionForm from './QuestionForm';
import Appointments from './Appointments';

const PetApp = function WhateverStupidName() {

  return (
    <div>
      MyPet
      <QuestionForm />
      <Appointments />
    </div>
  );
};

export default PetApp;
