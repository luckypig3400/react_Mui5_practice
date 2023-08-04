import styled from '@emotion/styled'
import { AppBar, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LuckyPigIcon from '@mui/icons-material/SavingsSharp';
// Icons Reference:
// https://mui.com/material-ui/material-icons/?query=pig&theme=Sharp&selected=SavingsSharp

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "5px 20px",
  borderRadius: theme.shape.borderRadius,
  width: "36%"
}))

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          LuckyPig
        </Typography>
        <LuckyPigIcon sx={{ display: { xs: "block", sm: "none" } }} />

        <Search><InputBase placeholder='Search...' /></Search>
      </StyledToolbar>
    </AppBar>
  )
}
