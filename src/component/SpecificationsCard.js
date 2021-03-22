/*
import React,{useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function SpecificationsCard() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
    return (
        <div className="App container">
          
          <DropdownButton
          
          title="Select_Category"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
            ><Dropdown.Item eventKey="Family" >Family</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Civil" >Civil</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Banking">Banking</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Criminal" >Criminal</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Employement" >Employment</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="BUsiness" >Business</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Cyber">Cyber</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {value}</h4>
    </div>
  );
}
export default SpecificationsCard;
*/
 /*
import React, { Component } from 'react';
import { render } from 'react-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SpecificationsCard  extends Component {
        constructor(props) {
          super(props);
      
          this.state = {
            selectValue : " "
          };
          this.handleDropdownChange = this.handleDropdownChange.bind(this);
        }
      
        handleDropdownChange(e) {
          this.setState({ selectValue: e.target.value });
        }

       render() {
    return (
      <div>
        <div>
          <div>
            <select id="dropdown" onChange={this.handleDropdownChange}>
              <option value="N/A">N/A</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div>Selected value is : {this.state.selectValue}</div>
        </div>
      </div>
    );
  }
}
      
      render(<SpecificationsCard />, document.getElementById('root'));
      export default SpecificationsCard
 */

 /*    
import React, { Component } from 'react';
import { render } from 'react-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SpecificationsCard  extends Component {
        constructor() {
          super();
      
          this.state = {
            selection : " "
          };
          this.handleChange = this.handleChange.bind(this); 
        }
      
      
        handleChange(event, index, value) {
          //set selection to the value selected
          console.log(value)
         this.setState({ selection : value });
      this.props.handleChange(value)
        }
        
        render() {
        return (
          <div>
            <MuiThemeProvider>
            
         <DropDownMenu 
            var value={this.props.selection} 
                onChange={this.handleChange}   
               >
                <MenuItem value="Family" primaryText="Family"  />
                <MenuItem value="Crime" primaryText="Crime" />
                <MenuItem value="Property" primaryText="Property" />
                <MenuItem value="Cyber" primaryText="Cyber" />
                <MenuItem value="Employement" primaryText="Employement"  />
                <MenuItem value="Banking" primaryText="Banking" />
                <MenuItem value="Business" primaryText="Business" />
                <MenuItem value="Others" primaryText="Others" />
      
              </DropDownMenu>
              
              </MuiThemeProvider>
              </div>
          );
        }
      }
      
      render(<SpecificationsCard />, document.getElementById('root'));
      export default SpecificationsCard
      */
     

import React, { Component } from 'react';
class SpecificationsCard  extends Component {
  
    
 
  handleChange = (e) => {
    const val = e.target.value;
    this.props.handleChange(val);
    
  };
        
        render() {
          const { selection } = this.props;
          
        return (
          <select value={selection} onChange={this.handleChange}>
          <option value="Family">Family</option>
          <option value="Crime">Crime</option>
          <option value="Property">Property</option>
          <option value="Cyber">Cyber</option>
          <option value="Employement">Employement</option>
          <option value="Banking">Banking</option>
          <option value="Business">Business</option>
          <option value="Others">Others</option>
          
        </select>
      );
    }
  }
  
      //     <div>
      //       <MuiThemeProvider>
            
      //    <DropDownMenu 
      //       value={selection} onChange={this.handleChange}  
      //          >
      //           <MenuItem value="Family" primaryText="Family"  />
      //           <MenuItem value="Crime" primaryText="Crime" />
      //           <MenuItem value="Property" primaryText="Property" />
      //           <MenuItem value="Cyber" primaryText="Cyber" />
      //           <MenuItem value="Employement" primaryText="Employement"  />
      //           <MenuItem value="Banking" primaryText="Banking" />
      //           <MenuItem value="Business" primaryText="Business" />
      //           <MenuItem value="Others" primaryText="Others" />
      
      //         </DropDownMenu>
              
      //         </MuiThemeProvider>
      //         </div>
      //     );
      //   }
       
      // }
      
      // render(<SpecificationsCard />, document.getElementById('root'));
      export default SpecificationsCard