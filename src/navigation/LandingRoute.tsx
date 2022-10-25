import LandingPage from '../layouts/landingPage/LandingPage';

const LandingRoute = ({ component }: { component: React.ReactNode }) => {
  return <LandingPage>{component}</LandingPage>;
};

export default LandingRoute;
