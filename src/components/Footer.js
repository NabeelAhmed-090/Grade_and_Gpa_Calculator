import React from 'react'
const Footer = () => {
    return (
        <div className="footer" style={footerStyle} >
            <h2><b>Grade and Gpa Calculator</b></h2>
            <h3>By Nabeel Ahmed</h3>
            <h4>FAST-NU</h4>
        </div>
    )
}

const footerStyle = {
    textAlign: "center",
    marginTop: "100px",
    backgroundColor: "#1f2833",
    color: "#66fcf1",
    marginRight: "1%"
}

export default Footer
