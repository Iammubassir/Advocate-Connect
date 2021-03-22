import React, { useState } from "react";
import HomeIcon from '@material-ui/icons/Home'
import NotificationOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined'
import {Avatar, Button,Input } from "@material-ui/core";
import CategoryIcon from '@material-ui/icons/Category';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import '../css/Navbar.css'
import { selectUser } from '../features/userSlice';
import {  useSelector } from 'react-redux';
import db, { auth } from '../firebase';
import Modal from "react-modal";
import firebase from 'firebase';
import SpecificationsCard from "./SpecificationsCard";
import Specifications from "./Specifications";
import advocate1 from './advocate1.png';
import LabelIcon from '@material-ui/icons/Label';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



function Navbar() {
    
    const user = useSelector(selectUser)
    const[openModal, setOpenModal] = useState(false)
    const [input,setInput] = useState("")
    const[modalOpen, setModalOpen] = useState(false)
    const[modalIsOpen, setModalIsOpen] = useState(false)
    const [selection, setSelection] = useState("")
    const handleQuestion = (e) => {
        e.preventDefault()

        setOpenModal(false)
        setModalOpen(false)
        setModalIsOpen(false)

        db.collection('questions').add({
            question: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user,
            category: {selection}
        })

        setInput("")
    }

   
    // //specifications
    // constructor() 
        
    
    //     this.state = {
    //       selection : " "
    //     };
    //     this.handleChange = this.handleChange.bind(this); 
    //   }
    
    //   handleChange(event, index, value) 
    //     //set selection to the value selected
    //     this.setState({ selection : value });
    
    //   //specifications
      
    return (
        <div className = 'aHeader'>
            <div className= 'img_Logo'>
            <img align="left"
                src = {advocate1}
                alt = ''
                />
            </div>
            <div> 
                <br/>
            </div>
            <div className = 'aHeader_logo'>
            
                    <h1  align="center" color="red"> Advocate-Connect</h1>
                
                
                 </div>
                 
                <div className = 'aHeader_icons'>
                  
                    <div className = 'aHeader_icon'>
                        <HomeIcon onClick={() => setModalIsOpen(true)}/>
                        <Modal
                        isOpen = {modalIsOpen}
                            onRequestClose = {() => setModalIsOpen(false)}
                            shouldCloseOnOverlayClick={true}
                            style = {{
                                overlay:{
                                width:1000,
                                height:605,
                                backgroundColor:"#E0B394",
                                zIndex: "1000",
                                top:"55%",
                                left:"45%",
                                marginTop: "-300px",
                                marginLeft:"-450px"
                            },
                                 }}
                            >
                                
                                <div className = "modal_category">
                                <img
                                align="right"
                                src = {advocate1}
                                />
                                <br/>
            <h3 align = 'center'><u>About Us</u></h3>
            <br/><br/><br/>
            <div><p font = "bold">
            Welcome to Advocate Connect, your number one source to get solution for all Legal Queries. We're dedicated to providing you the better & immediate solutions, with a focus on dependability.
We're working to turn our passion for Legal platform into a booming online era. We hope you get satisfied with our Services as much as we delight offering them to you.

<br/><br/><br/>
Sincerely,<br/><br/>
Team,<br/>
Advocate Connect</p>
            </div><br/>
            <div align = "center" >
                                 To Contact : <br/>
                                 Mail us @  : advcocateconnect@gmail.com<br/>
                                 Contact No : +0123456789 
            </div>
                      
                            </div>         

                            <div className = "category_button">
                            <Button className = "cancel"onClick= {()=> setModalIsOpen(false)}>Close</Button>
                            </div>
                        </Modal>
                    </div>
                    
                    <div className = 'aHeader_icon'>
                        <CategoryIcon onClick={() => setModalOpen(true)}/>
                        <Modal
                        isOpen = {modalOpen}
                            onRequestClose = {() => setModalOpen(false)}
                            shouldCloseOnOverlayClick={true}
                            style = {{
                                overlay:{
                                width:700,
                                height:600,
                                backgroundColor:"#E0B394",
                                zIndex: "1000",
                                top:"55%",
                                left:"45%",
                                marginTop: "-300px",
                                marginLeft:"-350px"
                            },
                                 }}
                            >
                            <div className = "modal_category">
                            <Specifications />

                            
                            </div>
                            <div className = "category_button">
                            <Button className = "cancel"onClick= {()=> setModalOpen(false)}>Close</Button>
                            </div>
                        </Modal>
                    </div>

                    <div className = 'aHeader_icon'>
                        <QuestionAnswerIcon onClick={() => setOpenModal(true)}/>
                    </div>

                    <div className = 'aHeader_icon'>
                        <NotificationOutlinedIcon />
                    </div>

                    <div className = 'aHeader_icon'>
                        <Avatar className="avatar" align="center" margin-top= "15PX" src={user.photo} />
                        <Button className="signout_Btn" onClick = {() => auth.signOut()} >SignOut</Button>
                        <Modal
                            isOpen = {openModal}
                            onRequestClose = {() => setOpenModal(false)}
                            shouldCloseOnOverlayClick={false}
                            style = {{
                                overlay:{
                                width:700,
                                height:500,
                                backgroundColor:"#E0B394",
                                zIndex: "1000",
                                top:"55%",
                                left:"45%",
                                marginTop: "-300px",
                                marginLeft:"-350px"
                            },
                                 }}
                        >
                            <div className = "modal_title">
                                <h5> Add Query / Issue</h5>
                                <div className = "modal_info">
                                    <Avatar className="avatar"
                                            src={user.photo}
                                    />
                                    <h5>asking a question as  {user.displayName?user.displayName:user.email} </h5>
                                    <div className = "modal_scope">
                                        <LabelIcon />
                                        <p>{selection}</p>
                                        <SpecificationsCard handleChange={setSelection} selection={selection} />
                                        
                                        {/* <DropDownMenu 
            var value={this.state.selection} 
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
      
              </DropDownMenu> */}
                                    </div>
                                </div>
                                <div className = "modal_field">
                                    <Input 
                                    required
                                    value = {input}
                                    onChange = {(e) => setInput(e.target.value)}
                                    type = "text"
                                    placeholder = "Enter Your Query/Issue here.."
                                    />
                                </div>
                                <div className = "modal_buttons">
                                <Button className = "cancel" onClick= {()=> setOpenModal(false)}>Close</Button>
                                <Button onClick= {handleQuestion}
                                type = "submit" className= "add">Add Query</Button>
                                </div>
                                
                            </div>
                        </Modal>
                    </div>
                </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar
