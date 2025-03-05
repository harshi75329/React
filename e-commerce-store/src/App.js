import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Login";
import ProductCatalogue from "./ProductCatalogue";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<ProductCatalogue />} />
      </Routes>
    </Router>
  );
}

export default App;
