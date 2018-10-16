import React, { Component } from 'react';
import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="about-container">

        <div className="about-left">
          <div className="about-us">About Us</div>
          <div className="about-line"></div>
        </div>

        <div className="about-text">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
          <br/><br/>
          One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
        </div>
      </div>
    );
  }
}

export default About;
