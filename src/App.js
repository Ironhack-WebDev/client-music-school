import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//authorisation
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import IsAdmin from "./components/IsAdmin";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

//pages
import AdminProfilePage from "./pages/AdminProfilePage";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import EditUserPage from  "./pages/EditUserPage"
import ContactPage from "./pages/general/ContactPage";
import ClassesList from "./pages/Classes";

//group pages
import GroupTimetablePage from "./pages/groups/GroupTimetablePage";
import GroupListPage from "./pages/groups/GroupListPage";
import GroupDetailsPage from "./pages/groups/GroupDetailsPage";
import EditGroupPage from "./pages/groups/EditGroupPage";
import GroupInfoPage from "./pages/groups/GroupInfoPage";
//message pages
import InboxDetailsPage from "./pages/messages/InboxDetailsPage";
import OutboxDetailsPage from "./pages/messages/OutboxDetailsPage";
import StandardMessage from "./components/messages/AdminMessage";
//instrument pages
import InstrumentListPage from "./pages/instruments/InstrumentListPage"
import InstrumentDetailsPage from "./pages/instruments/InstrumentDetailsPage"
import TeacherDetailsPage from "./pages/instruments/TeacherDetailsPage"
import EditInstrumentPage from "./pages/instruments/EditInstrumentPage";
//lesson pages
import LessonDetailsPage from "./pages/lessons/LessonDetailsPage"
import EditLessonPage from "./pages/lessons/EditLessonPage";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<IsPrivate><UserPage /></IsPrivate>} />
        <Route path="/user/edit/:userId" element={<IsPrivate><EditUserPage /></IsPrivate>} />
        <Route path="/admin" element={<IsAdmin> <AdminProfilePage /> </IsAdmin>} />

        <Route path="/classes" element={<ClassesList />} />

        <Route path="/timetable" element={<GroupTimetablePage />} />
        <Route path="/groups" element={<GroupListPage />} />
        <Route path="/groups/:groupId" element={<GroupDetailsPage />} />
        <Route path="/groups/info/:groupId" element={<GroupInfoPage />} />
        <Route path="/groups/edit/:groupId" element={<IsAdmin><EditGroupPage /></IsAdmin>} />

        <Route path="/tuition" element={<InstrumentListPage />} />
        <Route path="/instruments/:instrumentId" element={<InstrumentDetailsPage />} />
        <Route path="/instruments/edit/:instrumentId" element={<IsAdmin><EditInstrumentPage /></IsAdmin>} />
        <Route path="/teacher/:instrumentId" element={<IsAdmin><TeacherDetailsPage /></IsAdmin>} />


        <Route path="/lessons/:lessonId" element={<IsAdmin><LessonDetailsPage /></IsAdmin>} />
        <Route path="/lessons/edit/:lessonId" element={<IsAdmin><EditLessonPage /></IsAdmin>} />

        <Route path="/messages" element={<StandardMessage />} />
        <Route path="/messages/inbox/:messageId" element={<InboxDetailsPage />} />
        <Route path="/messages/outbox/:messageId" element={<OutboxDetailsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />

        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
