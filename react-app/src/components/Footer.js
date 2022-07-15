import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-ul">
        <div className='github-repo-link'>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/weiqimei/besTEAs"
            className="white"
          >
            GitHub Repository | besTEAs 2022
          </a>
        </div>
        <div className='github-link'>
          <a href="https://github.com/weiqimei"
          >
            GitHub
          </a>
        </div>
        <div className='linkedin-link'>
          <a href="https://www.linkedin.com/in/weiqimei/"
          >
            LinkedIn
          </a>
        </div>
        <div className='footer-text'>Javascript</div>
        <div className='footer-text'>React</div>
        <div className='footer-text'>Redux</div>
        <div className='footer-text'>Python</div>
        <div className='footer-text'>Flask</div>
        <div className='footer-text'>Docker</div>
        <div className='footer-text'>SQLAlchemy</div>
        <div className='footer-text'>PostgreSQL</div>
        <div className='footer-text'>HTML</div>
        <div className='footer-text'>CSS</div>
        <div className='footer-text'>Heroku</div>
      </div>
    </div>
  )

}

export default Footer
