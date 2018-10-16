import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/';
import './Projects.scss';

class Projects extends Component {
  state = {
    isHover: [false, false, false, false, false, false, false, false],
    projects: ["project1", "project2", "project3", "project4",
    "project1", "project2", "project3", "project4"],
    projectNames: ["Landing Page", "Online Bank", "Super System", "Mobile app",
    "Landing Page", "Online Bank", "Super System", "Mobile app",]
  }

  mouseOver = (i) => {
    return () => {
      if (this.state.isHover[i] === true) {
        return this.state;
      }
      let isHover = [...this.state.isHover]
      isHover[i] = true;
      this.setState({ ...this.state, isHover });
    }
  }

  mouseExit = (i) => {
    return () => {
      if (this.state.isHover[i] === false) {
        return this.state;
      }
      let isHover = [...this.state.isHover]
      isHover[i] = false;
      this.setState({ ...this.state, isHover });
    }
  }

  render() {
    const {isHover, projects, projectNames} = this.state;
    return (
      <div className="projects-container">
        <div className="our-projects">Our projects</div>

        <div className="projects-list">

          {
            projects.map((project, i) => (
              <div
                onMouseOver={this.mouseOver(i)}
                onMouseLeave={this.mouseExit(i)}
                key={Math.random() * 0xFFFFFF}
              >
                <ProjectItem 
                  project={project}
                  name={projectNames[i]}
                  isHover={isHover[i]}
                />
              </div>
            ))
          }

        </div>
      </div>
    );
  }
}

export default Projects;
