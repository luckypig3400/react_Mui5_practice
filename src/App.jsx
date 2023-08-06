import React, { useState } from "react"
import MuiCrashCoursePractice from "./MuiCrashCoursePractice"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import AddPost from "./components/AddPost"

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  )
}

export default App
