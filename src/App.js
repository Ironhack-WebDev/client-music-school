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
//group pages
import GroupTimetablePage from "./pages/groups/GroupTimetablePage";
import GroupDetailsPage from "./pages/groups/GroupDetailsPage";
import EditGroupPage from "./pages/groups/EditGroupPage";

//message pages
import MessageDetailsPage from "./pages/messages/MessageDetailsPage";
import Inbox from "./pages/messages/inbox";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
        <Route path="/admin" element={<AdminProfilePage />} />

        <Route path="/timetable" element={<GroupTimetablePage />} />
        <Route path="/groups/:groupId" element={<GroupDetailsPage />} />
        <Route path="/groups/edit/:groupId" element={<EditGroupPage />} />

        <Route path="/messages/:messageId" element={<MessageDetailsPage />} />
        <Route path="/users/:userId/messages" element={<Inbox />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
