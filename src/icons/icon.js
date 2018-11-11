import React from 'react';
import react from'./React-icon.svg';
import html5 from'./html5.svg';
import illustrator from'./Illustrator.svg';
import javascript from'./JavaScript.svg';
import mongodb from'./mongodb.svg';
import node from'./Node.svg';
import css from'./Css.svg';
import sss from'./redux.svg';
import bootstrap from'./Boostrap.svg';
import jest from'./jest.svg';

class Icon extends React.Component {
  state = {
    techs:[
      {name:'HTML5', comp: html5},
      {name:'CSS3', comp: css},
      {name:'JavaScript', comp: javascript},
      {name:'React', comp: react}, 
      {name:'Redux', comp:sss},
      {name:'Jest', comp: jest},
      {name:'Bootstrap', comp:bootstrap},
      {name:'Illustrator', comp: illustrator},  
      {name:'NodeJS', comp: node}, 
      {name:'MongoDB', comp:mongodb}
    ]
  }

  render() {
    return (
      <div>
      {this.state.techs.map((elem)=>{
      return (
        <div style={{display: 'inline-block', fontSize:'1rem', textAlign: 'center', margin:'1%'}} key={elem.comp}>
        
        <img   src={elem.comp} height='60rem' alt='error'/>
        <div  className='item'>{elem.name}</div>
        </div>)
      })}

      </div>
    );
  }
}
export default Icon;