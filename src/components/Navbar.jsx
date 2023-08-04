import styled from '@emotion/styled'
import { AppBar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LuckyPigIcon from '@mui/icons-material/SavingsSharp';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
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

const IconsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
}))

export default function Navbar() {
  const BadgeStyle = {
    marginLeft: "10px",
    "&:hover": {
      color: "darkgray",
      cursor: "pointer",
      // https://stackoverflow.com/questions/61386781/change-cursor-type-material-ui-expansion-panel
    }
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          LuckyPig
        </Typography>
        <LuckyPigIcon sx={{ display: { xs: "block", sm: "none" } }} />

        <Search><InputBase placeholder='Search...' /></Search>

        <IconsContainer>
          <Badge sx={BadgeStyle} badgeContent={36} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge sx={BadgeStyle}>
            <NotificationsIcon />
          </Badge>
        </IconsContainer>
      </StyledToolbar>
    </AppBar>
  )
}
