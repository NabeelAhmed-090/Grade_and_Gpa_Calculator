import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../globalStyle.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid style={firstCol} item xs={3}>
                    <Link style={linkStyles} to="/">Grade</Link>
                </Grid>
                <Grid style={secondCol} item xs={5}>
                    <Link style={linkStyles} to="/SGPA">SGPA</Link>
                </Grid>
                <Grid style={thirdCol} item xs={2}>
                    <Link style={linkStyles} to="/CGPA">CGPA</Link>
                </Grid>
            </Grid>
        </Box>
    )
}

const linkStyles = {
    textDecoration: "none",
    color: "#66fcf1"
}

const firstCol = {
    textAlign: "right",
    marginTop: "5%",
    marginLeft: "3%"
}

const secondCol = {
    textAlign: "center",
    marginTop: "5%"
}

const thirdCol = {
    textAlign: "left",
    marginTop: "5%"
}

export default Header