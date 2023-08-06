import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DateRangeIcon from '@mui/icons-material/DateRange';

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

          <TextField
            sx={{ width: "100%" }}
            id="create-post-multiline-textfield"
            multiline
            rows={6}
            placeholder="What's on your mind?"
            variant="standard"
          />

          <Stack direction="row" gap={2} mt={2} mb={2}>
            <EmojiEmotionsIcon color='primary' />
            <ImageIcon color="secondary" />
            <VideocamIcon color='success' />
            <PersonAddAlt1Icon color='error' />
          </Stack>

          <ButtonGroup variant="contained" fullWidth aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }} color="info"><DateRangeIcon /></Button>
            <Button color="error">Discard</Button>
          </ButtonGroup>
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