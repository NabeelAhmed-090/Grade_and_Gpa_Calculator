import React from 'react'
const Footer = () => {
    return (
        <div style={footerStyle} >
            <hr style={{ border: "0.25px solid #66fcf1", textAlign: "center" }} />
            <h4 style={fontStyle}>Grade and Gpa Calculator</h4>
            <h5 style={fontStyle}>Nabeel Ahmed FAST-NU</h5>
        </div>
    )
}

const footerStyle = {
    marginTop: "50px",
    textAlign: "center",
    backgroundColor: "#1f2833",
    color: "#66fcf1",
    minHeight: "100px",
}

const fontStyle = {
    fontWeight: "100",
    marginRight: "1%"
}

export default Footer


