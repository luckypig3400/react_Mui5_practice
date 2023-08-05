import React from "react"
import MuiCrashCoursePractice from "./MuiCrashCoursePractice"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import { Box, Stack } from "@mui/material"
import AddPost from "./components/AddPost"

function App() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>

      <AddPost />
    </Box>
  )
}

export default App
