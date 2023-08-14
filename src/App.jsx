import React, { useState } from "react"
import MuiCrashCoursePractice from "./MuiCrashCoursePractice"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import AddPost from "./components/AddPost"
import { GlobalVariablesProvider } from "./GlobalVariablesContext"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"
import { HashRouter, Route, Routes } from "react-router-dom"

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalVariablesProvider>
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Navbar setMode={setThemeMode} mode={themeMode} />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
          >
            <Sidebar setMode={setThemeMode} mode={themeMode} />

            <HashRouter>
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="page1" element={<Page1 />} />
                <Route path="page2" element={<Page2 />} />
                <Route path="page3" element={<Page3 />} />
              </Routes>
            </HashRouter>

            <Rightbar />
          </Stack>

          <AddPost />
        </Box>
      </GlobalVariablesProvider>
    </ThemeProvider>
  )
}

export default App
