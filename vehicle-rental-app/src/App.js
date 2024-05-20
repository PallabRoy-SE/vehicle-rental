import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { AlertProvider } from "./contexts/AlertContext";
import { LoaderProvider } from "./contexts/LoaderContext";

function App() {
  return (
    <AlertProvider>
      <LoaderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </AlertProvider>
  );
}

export default App;
