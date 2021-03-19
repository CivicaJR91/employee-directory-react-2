import React from "react";
import PersonList from './PersonList'

import '../utils/style.css';



function Directory() {
    return(  
        <div>
        <div className="container">
        <div className="jumbotron">
            <h1>Employee Directory</h1>
            <p> Search An Employee</p>
        </div>
    
        
    </div>
    <div>
            <PersonList  />
            </div>
    </div>
     )
 
}

export default Directory;