import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";\
import Dashboard from "./scenes/dash";
// import Dashboard from "./scenes/dashboard/landingpage";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
// import SignInSide from "./scenes/landingPage";
// import LandingPage from "./scenes/Landingpage/landingpage"; 
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SignIn from "./scenes/Authentication/Signin/Signinasd";
import SignUp from "./scenes/Authentication/Signup/SignUp";
// import Calendar from "./scenes/calendar/calendar";
import { Toaster } from "react-hot-toast";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      {/* <Toaster/> */}
        <CssBaseline />
        <div className="app">
          {isSidebar?<Sidebar isSidebar={isSidebar} />:null}
          <main className="content">
            
            
          {isSidebar?<Topbar setIsSidebar={setIsSidebar} />:null}
            <Routes>
              <Route path="/" element={<SignIn setWlc={setIsSidebar}/>} />
              <Route path="/signup" element={<SignUp setWlc={setIsSidebar}/>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
