import { Button } from "@mui/material";
import { Settings as SettingsIcon, Add as AddIcons, AccessAlarm as AccessAlarmIcon } from '@mui/icons-material';

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" disabled>Disabled</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <Button variant="contained" color="primary" size="large">Primary Color</Button>
      <Button variant="contained" color="secondary" size="small">Secondary Color</Button>
      <Button variant="contained" color="warning">Warning</Button>
      <Button variant="outlined" color="info" >info</Button>
      <br />
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="success"
      >
        Settings
      </Button>
      <Button
        startIcon={<AddIcons />}
        variant="contained"
        color="primary"
      >
        Add New Post
      </Button>
      <Button
        startIcon={<AccessAlarmIcon />}
        variant="contained"
        color="secondary"
      >
        排程發文
      </Button>
    </div>
  )
}

export default App
