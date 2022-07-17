import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
