import { Avatar } from '@material-ui/core';
import React from 'react';
import "../css/QueryBox.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function QueryBox() {
    const user = useSelector(selectUser)
    return (
        <div className= 'queryBox'>
            <div className='queryBox_info'>
                <Avatar src={user.photo}/>
            <p> Hello, {user.displayName ? user.displayName : user.email} </p>
            </div>
            <div className="queryBox_query">

            <p>Welcome to Advocate Connect</p>
            
                    
            </div>
        </div>
    )
}

export default QueryBox
