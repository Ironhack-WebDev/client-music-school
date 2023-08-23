import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";
import IsAnon from "./components/IsAnon";

//pages
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import StandardMessage from "./pages/messages/StandardMessage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/message" element={<StandardMessage />} />

        <Route
          path="/signup"
          element={
            <IsAnon>
              {" "}
              <SignupPage />{" "}
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              {" "}
              <LoginPage />{" "}
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
