import * as React from 'react'
import {Box} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {borderColor} from '@mui/system'
import MoreButtonCom from '../MoreButtonCom/MoreButtonCom'


export default function AnimalsDataGridCom({animals, onDelete}) {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 50,
    },
    {
      field: 'species',
      headerName: 'Species',
      width: 150,
    },
    {
      field: 'openForAdoption',
      headerName: 'Open for Adoption',
      width: 150,
      type: 'boolean',
    },
    {
      field: 'adoptionStatus',
      headerName: 'Adoption Status',
      width: 150,
      renderCell: (params) => {
        return (
          <div>{params.value.status}</div>
        )
      },
    },
    {
      field: 'admissionDate',
      headerName: 'Admission Date',
      width: 150,
      type: 'date',
      valueFormatter: (params) => {
        const admissionDate = new Date(params.value);
        return admissionDate.toISOString().split('T')[0];
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <DeleteIcon
            onClick={() => onDelete(params.row.id)}
            style={{cursor: 'pointer', marginRight: '8px'}}
          />
          <MoreButtonCom/>
        </div>
      ),
    },
  ]

  return (
    <Box sx={{height: 400, width: '100%'}}>
      <DataGrid
        rows={animals}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection={false}
        disableRowSelectionOnClick
      />
    </Box>
  )
}