import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    
  } from "react-icons/fa";
  const Banner = () => {
    const [state] = React.useState({
      title: "Welcome to Our Center",
      text:
        "Language is the most powerful weapon which you can use to change the world.",
      image: "/images/photot.png",
    });
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__content">
                <div className="header__section">
                  <ul className="header__ul">
                    <li>
                      <FaFacebookF className="headerIcon" />
                    </li>
                    <li>
                      <FaTwitter className="headerIcon" />
                    </li>
                    
                    <li>
                      <FaInstagram className="headerIcon" />
                    </li>
                  </ul>
                  <h1>{state.title}</h1>
                  <p>{state.text}</p>
                 
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="banner__img">
                <img src={state.image} alt="man" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
export default Banner;