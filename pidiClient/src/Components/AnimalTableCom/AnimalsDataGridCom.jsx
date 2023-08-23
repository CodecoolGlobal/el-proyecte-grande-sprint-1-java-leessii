import * as React from 'react'
import {Box} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function AnimalsDataGridCom({animals, adoptionStatus, onDelete}) {
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
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 50,
      editable: true,
    },
    {
      field: 'species',
      headerName: 'Species',
      width: 150,
      editable: true,
    },
    {
      field: 'openForAdoption',
      headerName: 'Open for Adoption',
      width: 150,
      type: 'boolean',
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
      type: "singleSelect",
      valueOptions: adoptionStatus.map((option) => ({
        value: option.status,
        label: option.status,
        key: option.status,
      }))
    },
    {
      field: 'admissionDate',
      headerName: 'Admission Date',
      width: 150,
      editable: true,
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
          <MoreVertIcon
            style={{cursor: 'pointer', marginRight: '8px'}}
          />
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