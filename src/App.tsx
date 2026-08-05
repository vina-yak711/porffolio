import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Education,
  Certifications,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
  StarsCanvas,
} from "./components";
import { config } from "./constants/config";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="bg-primary text-primary relative z-0 min-h-screen transition-colors duration-300">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Works />
          <Experience />
          <Education />
          <Certifications />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
