import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';


const StudentQueries = ({ data }) => (
  <Card>
    <CardHeader title="Student Queries" sx={{ mb: 5 }} />

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                <Button variant="outlined" disabled>
                  View
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined" disabled>
                  Decline
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
);

StudentQueries.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StudentQueries;
