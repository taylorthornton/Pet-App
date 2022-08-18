import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { allAppointments } from './atoms';

function Appointments() {
  const allApps = useRecoilValue(allAppointments);
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [location, setLocation] = useState('');

  return (
    <OuterDiv>
      <Title>
      Appointments
      </Title>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, backgroundColor: '#bd8f8f' }} aria-label="simple table">
        <TableHead sx={{ fontWeight: 'bold' }}>
          <TableRow>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Doctor/Meds</TableCell>
            <TableCell align="left">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Checkup</TableCell>
              <TableCell align="left">09/22/22</TableCell>
              <TableCell align="left">11 AM</TableCell>
              <TableCell align="left">Dr. Strange</TableCell>
              <TableCell align="left">324 Rainbow Bridge</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Medication</TableCell>
              <TableCell align="left">09/20/22</TableCell>
              <TableCell align="left">9 AM</TableCell>
              <TableCell align="left">Thyroid</TableCell>
              <TableCell align="left">Cat Pantry</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <InnerDiv>

    <Form>
          <Label>
            Type:
            </Label>
            <input
              type="text"
              name="type"
              required
              onChange={(e) => setType(e.target.value)}
            />
          <Label>
            Date:
            </Label>
            <input
              type="text"
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
          <Label>
            Time:
            </Label>
            <input
              type="text"
              name="time"
              onChange={(e) => setTime(e.target.value)}
            />
          <Label>
            Doctor/Meds:
            </Label>
            <input
              type="text"
              name="doctor"
              onChange={(e) => setDoctor(e.target.value)}
            />
          <Label>
            Location:
            </Label>
            <input
              type="text"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            />
          <input type="submit" value="Add"/>
        </Form>

    </InnerDiv>
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
const Form = styled.form`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  justify-content: space-evenly;
`

const Label = styled.label`
  width: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
  const InnerDiv = styled.div`
  /* padding-right: 2vh;
  padding-top: 2vh;
  padding-bottom: 2vh:
  padding-left: 2vh; */
  display: flex;
  flex-direction: column;
  margin: 2vh;
  align-items: center;
  /* justify-content: space-between; */
  /* align-self: center; */
`