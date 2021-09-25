import React from 'react'
const Footer = () => {
    return (
        <div style={footerStyle} >
            <h3 style={fontStyle}>Grade and Gpa Calculator</h3>
            <h4 style={fontStyle}>Nabeel Ahmed Fast-NU</h4>
        </div>
    )
}

const footerStyle = {
    marginTop: "50px",
    textAlign: "center",
    backgroundColor: "#1f2833",
    color: "#66fcf1",
    marginRight: "1%",
    minHeight: "100px",
}

const fontStyle = {
    fontWeight: "100"
}

export default Footer
