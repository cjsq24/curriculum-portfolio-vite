import GithubImg from 'src/assets/images/landing-page/github-logo.jpg';
import LinkedinImg from 'src/assets/images/landing-page/linkedin-logo.png';

const SocialSection = () => {
  return (
    <div className="social-media-container hide-xs">
      <a href="https://github.com/cjsq24" target="_blank" rel="noreferrer">
        <img src={GithubImg} />
      </a>
      <a
        href="https://www.linkedin.com/in/carlos-sosa-q/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkedinImg} />
      </a>
    </div>
  );
};

export default SocialSection;
