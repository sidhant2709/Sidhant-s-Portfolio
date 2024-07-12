import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { getStorageTheme } from "./utils/theme";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const App = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Fragment>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={() => {}}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#151531",
            },
            links: {
              color: `${theme === "dark-theme" ? "#2c2c6c" : "#ff9800"}`,
              distance: 150,
              enable: true,
              opacity: 0.7,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 3000,
              },
              value: 80,
            },
            opacity: {
              value: 0,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar theme={theme} setTheme={setTheme} />
      <Header theme={theme} />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
