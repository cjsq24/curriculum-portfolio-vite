import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingRoute from './LandingRoute';
import Home from '../views/landingPage/home/Home';
import AboutMe from '../views/landingPage/aboutMe';
import Skills from '../views/landingPage/skills';
import Portfolio from '../views/landingPage/portfolio';
import Experience from '../views/landingPage/experience';
import ContactMe from '../views/landingPage/contactMe';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingRoute component={<Home />} />} />

        <Route path="/home" element={<LandingRoute component={<Home />} />} />
        <Route
          path="/about-me"
          element={<LandingRoute component={<AboutMe />} />}
        />
        <Route
          path="/skills"
          element={<LandingRoute component={<Skills />} />}
        />
        <Route
          path="/portfolio"
          element={<LandingRoute component={<Portfolio />} />}
        />
        <Route
          path="/experience"
          element={<LandingRoute component={<Experience />} />}
        />
        <Route
          path="/contact-me"
          element={<LandingRoute component={<ContactMe />} />}
        />

        {/* <Route path="*">
          <h1>Error 404</h1>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
