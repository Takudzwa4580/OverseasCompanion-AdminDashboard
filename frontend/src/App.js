import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Sidebar from "./Screens/Sidebar";
import { useState } from "react";
import UserDetails from "./Screens/UserDetails";
import Applications from "./Screens/Applications";
import Courses from "./Screens/courses/courses";
import ProfileSettings from "./Screens/profilesettings";
import Login from "./Screens/Login";
import Notifications from "./Screens/Notifications";
import QuickApplication from "./Screens/quickapplication";



function App() {
  const [toggle,setToggle]=useState(false)
  const Toggle=()=>{
    setToggle(!toggle)
  }
 
  return (
    <Router>
      <div className="d-flex ">
       {toggle && <div className="w-auto">
          <Sidebar />
        </div>}
        <div className="col overflow-auto ">
          <Routes>
             <Route path="/Login" element={<Login/>} />
            <Route path="/" element={<Home Toggle={Toggle}/>} />
            <Route path="/user/:id" element={<UserDetails Toggle={Toggle}/>}/>
            <Route path="/applications" element={<Applications Toggle={Toggle}/>}/>
            <Route path="/quickapplication" element={<QuickApplication Toggle={Toggle} />} />
            <Route path="/courses"   element={<Courses Toogle={Toggle}/>} />
            <Route  path="/profilesettings" element={<ProfileSettings Toggle={Toggle}/>} />
            <Route path="/notifications" element={<Notifications  Toggle={Toggle}/>} />
           </Routes>
        </div>
      </div>
    </Router>
  );  
}

export default App;
