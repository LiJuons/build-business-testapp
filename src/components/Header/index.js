import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Photo1, Photo2, Photo3, Photo4 } from '../../assets/';
import './Header.scss';

class Header extends Component {
  state = {didMount: false, didMount2: false, didMount3: false}

  componentDidMount() {
    setTimeout(() => {
      this.setState({didMount: true})
    }, 0);
    this.timeout1 = setTimeout(() => {
      this.setState({didMount2: true})
    }, 450);
    this.timeout2 = setTimeout(() => {
      this.setState({didMount3: true})
    }, 900);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout1);
    clearTimeout(this.timeout2);
  }

  render() {
    const {didMount,didMount2, didMount3} = this.state
    return (
      <div className="header-container">

        <CSSTransition
          in={didMount}
          appear={true}
          timeout={900}
          classNames="fade"
          unmountOnExit
        >
           <div className="photo-container">
            <img src={Photo2} id="photo2" alt="photo2" />
            <img src={Photo1} id="photo1" alt="photo1" />
            <img src={Photo4} id="photo4" alt="photo4" />
            <img src={Photo3} id="photo3" alt="photo3" />
          </div>
        </CSSTransition>

        <CSSTransition
          in={didMount2}
          appear={true}
          timeout={900}
          classNames="fade"
          unmountOnExit
        >
          <div className="build-your-business">
            <div className="title-1st-line">Build your</div>
            <div className="title-2nd-line">business</div> 
          </div>
        </CSSTransition>

        <CSSTransition
          in={didMount3}
          timeout={900}
          classNames="header-line"
          unmountOnExit
        >
          <div className="header-line"></div>
        </CSSTransition>
        
      </div>
    );
  }
}

export default Header;
