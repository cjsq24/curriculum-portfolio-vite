import GithubImg from 'src/assets/images/landing-page/github-logo.jpg';
import LinkedinImg from 'src/assets/images/landing-page/linkedin-logo.png';

const Footer = () => {
  return (
    <div className="l-footer-content">
      <span className="l-footer-text">
        Hecho en React por:{' '}
        <a
          href="https://github.com/cjsq24"
          target="_blank"
          rel="noreferrer"
          className="link-to-github"
        >
          Carlos Sosa Q.
        </a>
      </span>
      <div className="show-xs">
        <img src={GithubImg} />
        <img src={LinkedinImg} />
      </div>
    </div>
  );
};

export default Footer;
