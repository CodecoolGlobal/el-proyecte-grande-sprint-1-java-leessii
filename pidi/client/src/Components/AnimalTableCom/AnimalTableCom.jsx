import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material'
import './AnimalTableCom.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

function AnimalTableCom({animals, onDelete}) {
  return (
    <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table size={'small'} stickyHeader aria-label={'animal table'}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Species</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Open for Adoption</TableCell>
              <TableCell>Admission Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              animals.map(animal => (
                <TableRow
                  key={animal.id}>
                  <TableCell>{animal.id}</TableCell>
                  <TableCell>{animal.name}</TableCell>
                  <TableCell>{animal.species}</TableCell>
                  <TableCell>{animal.age}</TableCell>
                  <TableCell>{animal.age}</TableCell>
                  <TableCell>{animal.age}</TableCell>
                  <TableCell align="center">
                    <DeleteIcon onClick={() => onDelete(animal.id)}/>
                    <EditIcon/>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
      />
    </Paper>
  )
}

export default AnimalTableCom