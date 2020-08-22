import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';

const StatusRow = (props) => {
  const { student, status } = props;
  return (
    <TableRow>
      <TableCell>{student}</TableCell>
      <TableCell>{status}</TableCell>
    </TableRow>
  );
};

StatusRow.propTypes = {
  student: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusRow;
