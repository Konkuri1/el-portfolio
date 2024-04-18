import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import { useState, useEffect } from "react";
import Loader from "./components/preloader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <Home />;
}

export default App;
