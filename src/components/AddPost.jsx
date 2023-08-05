import { Fab, Tooltip } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function AddPost() {
  return (
    <>
      <Tooltip title="Add New Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 }
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  )
}
