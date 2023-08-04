import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LuckyPigIcon from '@mui/icons-material/SavingsSharp';
// Icons Reference:
// https://mui.com/material-ui/material-icons/?query=pig&theme=Sharp&selected=SavingsSharp

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          LuckyPig
        </Typography>
        <LuckyPigIcon sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  )
}
