import React, { useState } from "react"
import MuiCrashCoursePractice from "./MuiCrashCoursePractice"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import AddPost from "./components/AddPost"

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
        >
          <Sidebar setMode={setThemeMode} mode={themeMode} />
          <Feed />
          <Rightbar />
        </Stack>

        <AddPost />
      </Box>
    </ThemeProvider>
  )
}

export default App
