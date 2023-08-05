import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
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
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}))

export default function Navbar() {
  const BadgeStyle = {
    // marginLeft: "10px",
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
          <Avatar
            sx={{ width: 30, height: 30, }}
            src='https://mui.com/static/images/avatar/3.jpg'
          />
        </IconsContainer>

        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://mui.com/static/images/avatar/3.jpg'
          />
          <Typography variant='span'>Amy</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={true}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
