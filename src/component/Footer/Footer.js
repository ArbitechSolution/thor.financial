import React from 'react'
import logo from "../../asset/logo-light.png";
import "./Footer.css"
function Footer() {
    return (
        <div className='container' id="footer">
            <div className='row mt mb-3 d-flex justify-content-between'>
                <div className='col-sm-6 text-md-start'>
                <img src={logo} className="footerimage" />
                </div>
                <div className='col-sm-6 text-md-end'>
                <p style={{color: "#6d8198"}}>© 2021 Copyright Thor.financial</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
