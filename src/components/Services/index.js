import React, { Component } from 'react';
import './Services.scss';

class Services extends Component {
  state = {
    services: [
      'Analysis',
      'Development',
      'Application modernisation',
      'UI/UX design',
      'Integration and data replication',
      'Performance optimisation',
      'Quality assurance'
    ],
    showService: [false,false,false,false,false,false,false]
  }

  componentDidMount() {
    const duration = 250;
    let i = 0;
    this.fadeInterval = setInterval(() => {
      let showService = [...this.state.showService]
      showService[i] = true;
      this.setState({ ...this.state, showService });
      i++;
    },duration);
    this.stopInterval = setTimeout(() => {
      clearInterval(this.fadeInterval);
    },duration*7);
  }

  componentWillUnmount() {
    clearInterval(this.fadeInterval);
    clearInterval(this.stopInterval);
  }

  render() {
    const {services, showService} = this.state;
    return (
      <div className="services-container">

        <div className="our-services">
          <div className="our-services-text">Our Services</div>
        </div>
        
        <div className="services-list">
            {              
              services.map((service, i) => (
                <div 
                  key={i} 
                  className={showService[i] ? "services-list-item item-show" : "services-list-item"}
                  style={(i===6)?{border: "none"} : {}}
                >

                  <div className="service-number">0{i+1}</div>
                  <div className="service-name">{service}</div>

                </div>
              ))
            }
        </div>
      </div>
    );
  }
}

export default Services;
