import React, { Component, useEffect } from 'react';

class SelectPage extends Component {
    constructor(props){
        super(props)
        console.log(props)
        const {cssx,FIELD} = this.props;
    
    }
    
  render () {
    const {cssx,FIELD} = this.props;
   
    return(
      <div className={this.props.cssx ?? ''}>
        <label className="d-block text-left font-weight-bold">{FIELD}</label>
        <select className="browser-default custom-select">
          <option>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    );
  }
}

export default SelectPage;