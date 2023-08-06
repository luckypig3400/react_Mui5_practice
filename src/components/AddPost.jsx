import { Avatar, Box, Fab, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';

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
          <UserBox>
            <Avatar src='https://mui.com/static/images/avatar/3.jpg'
              sx={{ width: 30, height: 30 }}
            />
            <Typography>Contents</Typography>
          </UserBox>
        </Box>
      </Modal>
    </>
  )
}

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
})

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