import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStudents from "./components/AddStudents";
import ViewStudents from "./components/ViewStudents";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routers>
        <Header />

        <Routes>
          <Route path="/" element={<ViewStudents/>} />
          <Route path="/add" element={<AddStudents />}></Route>
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
