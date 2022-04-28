
import React from "react"



export default function Info(){
    
    return(
        <div className ="info">
            
            <img src="../images/profile-pic.svg" className="profile-pic" />
            <h1 className="profile-name"> Laura Smith</h1>
            <h4 className="profile-role"> Frontend Developer</h4>
            <h6 className="profile-byline"> laurasmith.wesite </h6>
            <div className="profile-buttons">
                <div className="email-button"><img src="../images/email.svg" className="but-logo"/> Email </div>
                <div className="linkedin-button"><img src="../images/linkedin.svg" className="but-logo"/> Linkedin </div>
            </div>
        </div>
    )
}









