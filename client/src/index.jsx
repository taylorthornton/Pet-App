import { createRoot } from 'react-dom/client';
import React from 'react';
import { RecoilRoot } from 'recoil';


import PetApp from './PetApp';

const root = createRoot(document.getElementById('root'));

// Huzzah for jsx!
const App = function WhateverStupidName() {
  return (

    <RecoilRoot>
      <PetApp />
    </RecoilRoot>
  );
};

root.render(<App />);