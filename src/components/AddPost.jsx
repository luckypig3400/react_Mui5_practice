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
        sx={modalStyle}
      >
        <Box sx={modalBoxStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            color="gray"
            textAlign="center"
          >
            Create Post
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Contents
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 10,
}

const modalBoxStyle = {
  width: "66%",
  height: "80%",
  bgcolor: "wheat",
  padding: 3,
  borderRadius: 5
}