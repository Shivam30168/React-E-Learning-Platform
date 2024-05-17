import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='website-footer'>
      <p>Copyright &copy; All rights reserved.</p>
      <p>Author: Shivam Tyagi</p>
      <div className="footer-section footer-section-main">
        <div className="links-and-language-selector">
          <div className="language-selector-container">
            <button type="button" className="ud-btn ud-btn-medium ud-btn-secondary ud-text-md language-selector-button_button__4lXYs" data-testid="language-selector-button">
              <span>English</span>
            </button>
          </div>
          <ul className="ud-unstyled-list link-column">
            <li><a href="/udemy-business/?locale=en_US&amp;mx_pg=httpcachecontextsme-list&amp;path=%2F&amp;ref=footer" className="link white-link ud-text-sm" target="_blank" rel="noopener">Udemy Business</a></li>
            <li><a className="link white-link ud-text-sm" href="/teaching/?ref=teach_footer">Teach on Udemy</a></li>
            <li><a className="link white-link ud-text-sm" href="/mobile/" target="_blank" rel="noopener noreferrer">Get the app</a></li>
            <li><a className="link white-link ud-text-sm" href="https://about.udemy.com/?locale=en-us">About us</a></li>
            <li><a className="link white-link ud-text-sm" href="https://about.udemy.com/company?locale=en-us#offices">Contact us</a></li>
          </ul>
          <ul className="ud-unstyled-list link-column">
            <li><a className="link white-link ud-text-sm" href="https://about.udemy.com/careers?locale=en-us">Careers</a></li>
            <li><a className="link white-link ud-text-sm" href="https://blog.udemy.com/?ref=footer">Blog</a></li>
            <li><a className="link white-link ud-text-sm" href="/support/">Help and Support</a></li>
            <li><a className="link white-link ud-text-sm" href="/affiliate/">Affiliate</a></li>
            <li><a className="link white-link ud-text-sm" href="https://investors.udemy.com">Investors</a></li>
          </ul>
          <ul className="ud-unstyled-list link-column">
            <li><a className="link white-link ud-text-sm" href="/terms/">Terms</a></li>
            <li><a className="link white-link ud-text-sm" href="/terms/privacy/">Privacy policy</a></li>
            <li data-testid="cookie-settings">
              <button type="button" className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link" data-purpose="footer.links.cookie_preferences">
                <span>Cookie settings</span>
              </button>
            </li>
            <li><a className="link white-link ud-text-sm" href="/sitemap/">Sitemap</a></li>
            <li><a className="link white-link ud-text-sm" href="https://about.udemy.com/accessibility-statement?locale=en-us">Accessibility statement</a></li>
          </ul>
        </div>
        <div className="logo-and-copyright">
          <div className="logo-container" data-testid="logo-container">
            <a href="/" className="ud-btn ud-btn-large ud-btn-link ud-heading-md">
              <img src="/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Udemy" width="91.07142857142857" height="34" loading="eager"/>
            </a>
          </div>
          <div className="copyright-container ud-text-xs">© 2024 Udemy, Inc.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
