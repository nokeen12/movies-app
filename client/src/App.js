import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  ErrorPage
} from "./pages";
import { Header, Footer } from "./components/main-components"

function App() {
  return (
    <div id="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;