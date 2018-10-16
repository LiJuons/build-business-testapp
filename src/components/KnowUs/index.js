import React, { Component } from 'react';
import { KnowUsImg } from '../../assets/';
import { ReactComponent as ArrowSvg } from '../../assets/arrow.svg';
import './KnowUs.scss';

class KnowUs extends Component {
  state = {
    inputFields: ["First Name", "Second Name", "Email"],
    isFocused: [false, false, false],
    fname: '',
    lname: '',
    email: ''
  }

  inputFocus = (i) => {
    return () => {
      if (this.state.isFocused[i] === true) {
        return this.state;
      }
      let isFocused = [...this.state.isFocused];
      isFocused[i] = true;
      this.setState({ ...this.state, isFocused});
    }
  }

  inputExit = (i) => {
    const {fname, lname, email} = this.state;
    return () => {
      if (this.state.isFocused[i] === false) {
        return this.state;
      }
      let isFocused = [...this.state.isFocused];
      if ((i===0&&fname==='') || (i===1&&lname==='') || (i===2&&email==='')) {
        isFocused[i] = false;
      }
      this.setState({ ...this.state, isFocused });
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {isFocused, fname, lname, email} = this.state;
    return (
      <div className="knowus-container">

        <div className="knowus-header">

          <div className="knowus-img-overlay">
            <div className="knowus-title">Know us</div>
            <ArrowSvg className="arrow"/>
          </div>

          <img src={KnowUsImg} alt="KnowUs" id="knowus-img" />

        </div>
        
        <div className="subscription-block">

          <div className="info-block">

            <div className="info-text">Fill the form and download our 
              <div className="info-presentation">presentation</div>
            </div>

          </div>

          <div className="input-list">

            <form onSubmit={this.handleSubmit}>
            
              <div className="input-list-item">
                <div className="input-number">01</div>
                <div className={isFocused[0] ? "input-name-focus" : "input-name"}>First Name</div>
                <input 
                  type="text"
                  onFocus={this.inputFocus(0)} 
                  onBlur={this.inputExit(0)}
                  name="fname"
                  value={fname}
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-list-item">
                <div className="input-number">02</div>
                <div className={isFocused[1] ? "input-name-focus" : "input-name"}>Last Name</div>
                <input 
                  type="text"
                  onFocus={this.inputFocus(1)} 
                  onBlur={this.inputExit(1)}
                  name="lname"
                  value={lname}
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-list-item">
                <div className="input-number">03</div>
                <div className={isFocused[2] ? "input-name-focus" : "input-name"}>Email</div>
                <input 
                  type="text"
                  onFocus={this.inputFocus(2)} 
                  onBlur={this.inputExit(2)}
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>

              <input className="getIt-button" type="submit" value="Get It" />

            </form>
              
          </div>
          
        </div>

      </div>
    );
  }
}

export default KnowUs;