import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

import { allAppointments } from './atoms';

function Appointments() {
  const allApps = useRecoilValue(allAppointments);

  return (
    <OuterDiv>
      <Title>
      Appointments
      </Title>
    <Table  size="sm">
    <thead>
      <tr>
        <th>Type</th>
        <th>Date</th>
        <th>Time</th>
        <th>Doctor</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Checkup</td>
        <td>09/22/22</td>
        <td>11 AM</td>
        <td>Dr. Strange</td>
        <td>324 Rainbow Bridge</td>
      </tr>
    </tbody>
  </Table>
  </OuterDiv>
  );
}

export default Appointments;

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
const Title = styled.div`
  /* padding-right: 2vh;
  padding-top: 2vh;
  padding-bottom: 2vh:
  padding-left: 2vh; */
  /* display: flex;
  flex-direction: column; */
  margin: 2vh;
  justify-content: space-between;
  align-self: center;
`