import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { app_routes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {app_routes.map((el:any) => (
          <Route path={el.path} element={el.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
