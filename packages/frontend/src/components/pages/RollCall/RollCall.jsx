import React, { Component } from 'react';
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import StatusRow from './StudentRow';

function createData(name, statut) {
  return { name, statut };
}

const student = [
  createData('A', 'présent'),
  createData('B', 'présent'),
  createData('C', 'absent'),
  createData('D', 'présent'),
];

class RollCallPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Etudiants</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {student.map((row) => (
              <StatusRow student={row.name} status={row.statut} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default RollCallPage;
