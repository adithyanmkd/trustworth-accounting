import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuditAndAssurance from "./pages/AuditAndAssurance";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/audit-and-assurance"
              element={<AuditAndAssurance />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
