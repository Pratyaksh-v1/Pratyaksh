import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Landing, Signup, Login, Main, AddProject } from "./pages";
import { Analysis, Chat, Task, Team, Update, Home } from "./components";
import { Provider } from "react-redux";
import { store } from "./store/store"

function App() {

  return (
    <Provider store={store} >
      <div className="h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/onboarding" element={<AddProject />} />
            <Route path="/:id" element={<Main />} >
              <Route path="" element={<Home />} />
              <Route path="task" element={<Task />} />
              <Route path="team" element={<Team />} />
              <Route path="update" element={<Update />} />
              <Route path="analysis" element={<Analysis />} />
              <Route path="simulator" element={<Analysis />} />
              <Route path="chat" element={<Chat />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider >

  );
}

export default App;
