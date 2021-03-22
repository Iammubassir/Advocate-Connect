import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component{
    render(){
        return(
            <div>
                 {/* <li>
                  <Link className="list" to="/">
                    Query
                  </Link>
                </li> */}
                  <li>
                  <Link className="list" to="/Login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="list" to="/Register">
                   Register
                  </Link>
                </li>
                
                <li>
                <Link className="list" to="/Client">
                 Client
                </Link>
              </li>

              <li>
              <Link className="list" to="/Advocate">
               Advocate
              </Link>
            </li>

            </div>
        );
    }
}
export default Navigation;
