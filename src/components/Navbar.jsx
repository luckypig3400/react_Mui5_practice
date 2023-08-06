import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, Drawer, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import LuckyPigIcon from '@mui/icons-material/SavingsSharp';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarMobile from './SidebarMobile';
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

export default function Navbar({ mode, setMode }) {
  const BadgeStyle = {
    // marginLeft: "10px",
    "&:hover": {
      color: "darkgray",
      cursor: "pointer",
      // https://stackoverflow.com/questions/61386781/change-cursor-type-material-ui-expansion-panel
    }
  }

  const [open, setOpen] = useState(false)

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                <SidebarMobile mode={mode} setMode={setMode} />
              </Drawer>
            </React.Fragment>
          ))}
        </Box>

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
            onClick={e => setOpen(true)}
          />
        </IconsContainer>

        <UserBox onClick={e => setOpen(true)}>
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
        open={open}
        onClose={e => setOpen(false)}
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
    </AppBar >
  )
}
