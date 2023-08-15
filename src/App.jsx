import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import AddPost from "./components/AddPost";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import { GlobalVariablesProvider, useGlobalVariables } from "./GlobalVariablesContext";

function App() {
  return (
    <GlobalVariablesProvider>
      <AppContent />
    </GlobalVariablesProvider>
  );
}

function AppContent() {
  const { themeMode } = useGlobalVariables();

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
          <Sidebar />

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
    </ThemeProvider>
  );
}

export default App;
