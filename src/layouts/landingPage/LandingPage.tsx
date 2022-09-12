import React from 'react';
import 'src/assets/css/landingPage.css';
import 'src/assets/css/general-styles.css';
import Header from './components/Header';
import Footer from './components/Footer';

const LandingPage: React.FC = ({ children }) => {
  return (
    <div className="l-container">
      <header className="l-header">
        <Header />
      </header>
      <main className="l-main">{children}</main>
      <footer className="l-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
