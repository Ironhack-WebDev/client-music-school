import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//pages
import AdminProfilePage from "./pages/AdminProfilePage";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
//general pages
import ContactPage from "./pages/general/ContactPage";

//group pages
import GroupTimetablePage from "./pages/groups/GroupTimetablePage";
import GroupListPage from "./pages/groups/GroupListPage";
import GroupDetailsPage from "./pages/groups/GroupDetailsPage";
import EditGroupPage from "./pages/groups/EditGroupPage";
//message pages
import MessageDetailsPage from "./pages/messages/MessageDetailsPage";
import StandardMessage from "./components/messages/AdminMessage";
//instrument pages
import InstrumentListPage from "./pages/instruments/InstrumentListPage"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
        <Route path="/admin" element={<AdminProfilePage />} />

        <Route path="/timetable" element={<GroupTimetablePage />} />
        <Route path="/groups" element={<GroupListPage />} />
        <Route path="/groups/:groupId" element={<GroupDetailsPage />} />
        <Route path="/groups/edit/:groupId" element={<EditGroupPage />} />

        <Route path="/tuition" element={<InstrumentListPage />} />

        <Route path="/messages" element={<StandardMessage />} />
        <Route path="/messages/:messageId" element={<MessageDetailsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
