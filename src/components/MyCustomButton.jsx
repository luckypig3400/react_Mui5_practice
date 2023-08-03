import { Button } from '@mui/material'
import React from 'react'

function MyCustomButton(props) {
  return (
    <div>
      <Button variant="contained" disabled={props.disabled}
        sx={{
          backgroundColor: "skyblue", color: "#333", margin: 5,
          "&:hover": {
            backgroundColor: "lightblue"
          },
          "&:disabled": {
            backgroundColor: "darkgray",
            color: "white"
          }
        }}
      >
        使用sx客製化Button
      </Button>
    </div>
  )
}

export default MyCustomButton
