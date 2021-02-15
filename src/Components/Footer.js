import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';




const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <h2>Found on the Internet</h2>
                  <div className="icons">
                  <SocialIcon url="https://www.linkedin.com/in/michael-reidy88/" id="linkedin" />
                  <SocialIcon url="https://github.com/mreidy88" id="github" />
                  </div>
                </div>
                <h3>Mike Reidy 2021</h3>
        </div>
    )
}

export default Footer
