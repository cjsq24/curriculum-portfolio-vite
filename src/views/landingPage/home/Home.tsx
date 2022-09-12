import avatar from 'src/assets/developer.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={avatar} alt="Avatar" className="home-avatar" />

        <div className="home-description">
          <span className="home-text-name">Carlos J. Sosa Q.</span>
          <span className="home-text-profession">Frontend Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
