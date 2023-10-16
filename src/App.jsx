import MainPage from "./pages/MainPage/MainPage"
import { Routes, Route } from "react-router-dom"



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default App;
