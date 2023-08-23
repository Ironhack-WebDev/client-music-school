import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//pages
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import StandardMessage from "./pages/messages/StandardMessage";
import GroupTimetablePage from "./pages/groups/GroupTimetablePage";
import GroupDetailsPage from "./pages/groups/GroupDetailsPage";
import EditGroupPage from "./pages/groups/EditGroupPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/message" element={<StandardMessage />} />

        <Route path="/groups" element={<GroupTimetablePage />} />

        <Route path="/groups/:groupId" element={<GroupDetailsPage />} />

        <Route path="/groups/edit/:groupId" element={<EditGroupPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
