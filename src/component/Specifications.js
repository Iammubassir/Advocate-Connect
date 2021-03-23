/*import React,{useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Specifications() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
    return (
        <div className="Specifications container">
          
          <DropdownButton
          title="Select_Category"
          
          
          onSelect={handleSelect}
            >
            <DropdownButton className = "family" title="FAMILY" onSelect={handleSelect} >
           <div>
                    <Dropdown.Item>Adoption</Dropdown.Item><br />
                    <Dropdown.Item>Property Distibution</Dropdown.Item><br />
                    <Dropdown.Item>Divorce/Sepetarion</Dropdown.Item><br />
                    <Dropdown.Item>Domestic Voilence</Dropdown.Item><br />
                    </div>
            </DropdownButton>

            <DropdownButton title="CRIME" onSelect={handleSelect} >
           
                    <Dropdown.Item>Motor Accident</Dropdown.Item><br />
                    <Dropdown.Item>Physical Attack</Dropdown.Item><br />
                    <Dropdown.Item>Juvenile</Dropdown.Item><br />
                    <Dropdown.Item>Criminal</Dropdown.Item><br />
            </DropdownButton>

            <DropdownButton title="PROPERTY" onSelect={handleSelect} >
           
                    <Dropdown.Item>Reistration</Dropdown.Item><br />
                    <Dropdown.Item>LandLord and Tenant</Dropdown.Item><br />
                    <Dropdown.Item>RealEstate</Dropdown.Item><br />
                    <Dropdown.Item>Power of Attorney</Dropdown.Item><br />
            </DropdownButton>

            <DropdownButton title="CYBER" onSelect={handleSelect} >
           
                    <Dropdown.Item>Cyber InformationTechnology, Internet </Dropdown.Item><br />
                    <Dropdown.Item>Mail Fraud</Dropdown.Item><br />
                    <Dropdown.Item>Software License</Dropdown.Item><br />
            </DropdownButton>

            <DropdownButton title="EMPLOYEMENT" onSelect={handleSelect} >
           
                    <Dropdown.Item>Administrative Law</Dropdown.Item><br />
                    <Dropdown.Item>Maternity and Paternaty </Dropdown.Item><br />
                    <Dropdown.Item>Sexual Harrasment at Work Place</Dropdown.Item><br />
            </DropdownButton>

            <DropdownButton title="BANKING" onSelect={handleSelect} >
           
                    <Dropdown.Item>Insurance</Dropdown.Item><br />
                    <Dropdown.Item>Check Bounce</Dropdown.Item><br />
                    <Dropdown.Item>Financial Markets and Services</Dropdown.Item><br />
                    <Dropdown.Item>Bankruptcy and Debt</Dropdown.Item><br />
            </DropdownButton>

            <DropdownButton title="BUSINESS" onSelect={handleSelect} >
           
                    <Dropdown.Item>Licensing</Dropdown.Item><br />
                    <Dropdown.Item>Merges and Acquisition</Dropdown.Item><br />
                    <Dropdown.Item>Contracts and Agreements</Dropdown.Item><br />
                    <Dropdown.Item>Business Loan</Dropdown.Item><br />
                    <Dropdown.Item>Tax Related</Dropdown.Item><br />
                    <Dropdown.Item>Commercial</Dropdown.Item><br />
            </DropdownButton>

            <DropdownButton title="OTHERS" onSelect={handleSelect} >
           
                    <Dropdown.Item>RTI</Dropdown.Item><br />
                    <Dropdown.Item>Tax</Dropdown.Item><br />
                    <Dropdown.Item>GST</Dropdown.Item><br />
                    <Dropdown.Item>Immigration</Dropdown.Item><br />
                    <Dropdown.Item>Human Rights </Dropdown.Item><br />
                    <Dropdown.Item> IP,CopyRight,Paytent,TradeMark </Dropdown.Item><br />
                    <Dropdown.Item> International Laws</Dropdown.Item><br />
                    <Dropdown.Item> Personal Loan</Dropdown.Item><br />
            </DropdownButton>
            
            
      </DropdownButton>
      
    </div>
  );
}
export default Specifications;
*/
//Bootstrap  from link   https://react-bootstrap.netlify.app/components/button-group/
/*
import React,{useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
function Specifications() {
        return (
                <div className="Specifications container">

<ButtonGroup vertical>
  <Button>Button</Button>
  <Button>Button</Button>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <Button>Button</Button>
  <Button>Button</Button>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>  
                        
                </div>
        )
}

export default Specifications
*/

/*
import React, { Component } from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Specifications  extends Component {
        constructor() {
          super();
      
          this.state = {
            selection : 1
          };
          this.handleChange = this.handleChange.bind(this); 
        }
      
        handleChange(event, index, value) {
          //set selection to the value selected
          this.setState({ selection : value });
      
        }
      
        pageControl(){
          if( this.state.selection == 1){
            return (
              <div>Hello
                      <br />
                      Hi
                      <br />
                      Namastea
              </div>
              
            );
          } else if( this.state.selection == 2) {
            return (
              <div>Hola</div>
            );
          } else if( this.state.selection == 3) {
            return (
              <div>Bonjour</div>
            );
          }
        }
      
        render() {
          return (
            <div>
              <MuiThemeProvider>
              <AppBar
                  title="Categories"
                  style={
                    { 
                      background:"#ffb370" //hex color values (yellow)
                    }
                  }
                  titleStyle = {
                    {
                      color:"#FFFFF" //color of text (black)
                    }
                  }
                  showMenuIconButton={false}
               />
               <DropDownMenu 
                value={this.state.selection} 
                onChange={this.handleChange}   
               >
                <MenuItem value={1} primaryText="English"  />
                <MenuItem value={2} primaryText="Spanish" />
                <MenuItem value={3} primaryText="French" />
      
              </DropDownMenu>
              <br/><br/><br/>
              <center>
              {this.pageControl()}
              </center>
              </MuiThemeProvider>
            </div>
          );
        }
      }
      
      render(<Specifications />, document.getElementById('root'));
      export default Specifications
*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Specifications  extends Component {
        constructor() {
          super();
      
          this.state = {
            selection : 1
          };
          this.handleChange = this.handleChange.bind(this); 
        }
      
        handleChange(event, index, value) {
          //set selection to the value selected
          this.setState({ selection : value });
      
        }
      
        pageControl(){
          if( this.state.selection == 1){
            return (
              <div>     <br />
                        Adoption
                      <br /><br />
                       Property Distribution
                      <br /><br />
                      Divorce/Sepeation
                      <br /><br />
                      Domestic Voilance
              </div>
              
            );
          } else if( this.state.selection == 2) {
            return (
              <div>  <br />
                        Motor Accident
                      <br /><br />
                       Physical Attack
                      <br /><br />
                      Juvenile
                      <br /><br />
                      Criminal
                </div>
            );
            // 
          } else if( this.state.selection == 3) {
            return (
              <div> <br />
                        Registration
                      <br /><br />
                       LandLord & Tenant
                      <br /><br />
                      RealEstate
                      <br /><br />
                      Power of Attorney
                </div>
            );
          }else if( this.state.selection == 4) {
                return (
                  <div> <br />
                        Cyber Information Technology, Internet
                      <br /><br />
                       Mail Fraud
                      <br /><br />
                      Software License
                </div>
                );
          }else if( this.state.selection == 5) {
                return (
                  <div> <br />
                        Administrative Law
                      <br /><br />
                      Maternity & Paternaty
                      <br /><br />
                      Sexual Harrasment at work Place
                </div>
                );
          }else if( this.state.selection == 6) {
                return (
                  <div><br />
                        Insurance
                      <br /><br />
                       Check Bounce
                      <br /><br />
                      Financial Markets & Services
                      <br /><br />
                      Bankruptcy & Debt
                </div>
                );
          }else if( this.state.selection == 7) {
                return (
                  <div><br />
                        Licensing
                      <br /><br />
                       Merges & Acquisition
                      <br /><br />
                      Contracts & Agreements
                      <br /><br />
                      Business Loan
                      <br /><br />
                      Tax Realated
                      <br /><br />
                      Commercial
                </div>
                );
          }else if( this.state.selection == 8) {
                return (
                  <div><br />
                        IP, CopyRight, Paytent,TradeMark
                      <br /><br />
                       International Laws
                      <br /><br />
                      Personal Loan
                      <br /><br />
                      Human Rights
                      <br /><br />
                      Immigration
                      <br /><br />
                      RTI
                      <br /><br />
                      Tax
                      <br /><br />
                      GST
                </div>
                );
          }
        }
      
        render() {
          return (
            <div>
              <MuiThemeProvider>
              <AppBar
                  title="Categories"
                  style={
                    { 
                      background:"#ffb370" //hex color values (yellow)
                    }
                  }
                  titleStyle = {
                    {
                      color:"#FFFFF" //color of text (black)
                    }
                  }
                  showMenuIconButton={false}
               />
               <DropDownMenu 
                value={this.state.selection} 
                onChange={this.handleChange}   
               >
                <MenuItem value={1} primaryText="Family"  />
                <MenuItem value={2} primaryText="Crime" />
                <MenuItem value={3} primaryText="Property" />
                <MenuItem value={4} primaryText="Cyber" />
                <MenuItem value={5} primaryText="Employement"  />
                <MenuItem value={6} primaryText="Banking" />
                <MenuItem value={7} primaryText="Business" />
                <MenuItem value={8} primaryText="Others" />
      
              </DropDownMenu>
              <br/><br/><br/>
              <center>
              {this.pageControl()}
              </center>
              </MuiThemeProvider>
            </div>
          );
        }
      }
      
      render(<Specifications />, document.getElementById('root'));
      export default Specifications
