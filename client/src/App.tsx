import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuditAndAssurance from "./pages/AuditAndAssurance";
import TaxAdvisory from "./pages/TaxAdvisory";

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
            <Route path="/tax-advisory" element={<TaxAdvisory />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
