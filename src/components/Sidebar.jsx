import { Box } from '@mui/material'
import React from 'react'

export default function Sidebar() {
  return (
    <Box bgcolor="lightpink"
      flex={10}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block"
        }
      }}
    >
      Sidebar
    </Box>
  )
}
