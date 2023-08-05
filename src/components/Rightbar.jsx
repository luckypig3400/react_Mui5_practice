import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

export default function Rightbar() {
  return (
    <Box flex={35}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block"
        }
      }}
    >
      <Box position="fixed">
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar alt="LuckyMan" src="https://previews.123rf.com/images/oriartiste/oriartiste1812/oriartiste181200207/114268122-lucky-pig-chinese-new-year-the-year-of-the-pig-lucky-pig-from-the-lucky-cat-translation.jpg" />
          <Avatar alt="Anya Foger" src="https://cdn.myanimelist.net/r/200x268/images/characters/4/457933.jpg?s=6eb706b2687d6e3b01a7cb254b5ca3e3" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}
