import { Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

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
    </div>
  )
}

export default App
