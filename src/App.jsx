import { Route, BrowserRouter as Router, Routes } from "react-router";
import CompanyRed from "./components/CompanyRed";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CompanyRed />} />
          {/* <Route path="/PDP" element={<ProductPage />} /> */}
          {/* <Route path="/Success" element={<SuccessPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
