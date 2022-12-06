import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  Header,
  Homepage,
  ErrorPage
} from "./pages";

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