import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import foodBankData from '../data-20221020221251.json'

export const FoodBankTable = () => {

    let foodBankDataList = foodBankData.data

    console.log(foodBankDataList)
    return(
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of Establishment</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Zip Code</TableCell>
            <TableCell align="right">Food Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodBankDataList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[8]}
              </TableCell>
              <TableCell align="right">{row[9]}</TableCell>
              <TableCell align="right">{row[10]}</TableCell>
              <TableCell align="right">{row[12]}</TableCell>
              <TableCell align="right">{row[16]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}