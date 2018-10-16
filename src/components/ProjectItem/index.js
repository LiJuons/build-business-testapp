import React from 'react';
import './ProjectItem.scss';

const ProjectItem = (props) => (
 <div>
    {
      props.isHover ? 
      <div className="hover-block">
        <div className="hover-project-name">{props.name}</div>
        <div className="hover-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</div>
      </div>
      : <div className="project-name">{props.name}</div>
    }
    <img src={require(`../../assets/${props.project}.png`)} className="projectImg" alt={props.project} />
 </div>
);

export default ProjectItem;