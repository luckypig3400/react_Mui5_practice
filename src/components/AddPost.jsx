import { Box, Fab, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function AddPost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Add New Post"
        onClick={e => setOpen(true)}
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

      <Modal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalBoxStyle}>
          <Typography id="modal-modal-title" variant="h6">
            Title
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Contents
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

const modalBoxStyle = { display: "grid", alignItems: "center", marginTop: "30vh", margin: 10 }