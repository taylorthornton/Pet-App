import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

import { allAppointments } from './atoms';

function Appointments() {
  const allApps = useRecoilValue(allAppointments);

  return (
    <Table striped bordered hover size="sm">
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
  );
}

export default Appointments;