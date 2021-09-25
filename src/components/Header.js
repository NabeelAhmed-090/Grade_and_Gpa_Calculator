import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../globalStyle.css"
import { Link } from 'react-router-dom'
import '../globalStyle.css'



const Header = () => {
    const [grade, setGrade] = useState('ActiveLink')
    const [sgpa, setSgpa] = useState('NonActiveLink')
    const [cgpa, setCgpa] = useState('NonActiveLink')

    const updateGrade = () => {
        setGrade("ActiveLink")
        setSgpa("NonActiveLink")
        setCgpa("NonActiveLink")
    }
    const updateSgpa = () => {
        setGrade("NonActiveLink")
        setSgpa("ActiveLink")
        setCgpa("NonActiveLink")
    }
    const updateCgpa = () => {
        setGrade("NonActiveLink")
        setSgpa("NonActiveLink")
        setCgpa("ActiveLink")
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid style={firstCol} item xs={3}>
                        <Link style={grade === "ActiveLink" ? ActiveLink : NonActivelink} onClick={updateGrade} to="/">Grade</Link>
                    </Grid>
                    <Grid style={secondCol} item xs={5}>
                        <Link style={sgpa === "ActiveLink" ? ActiveLink : NonActivelink} onClick={updateSgpa} to="/SGPA">SGPA</Link>
                    </Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <Link style={cgpa === "ActiveLink" ? ActiveLink : NonActivelink} onClick={updateCgpa} to="/CGPA">CGPA</Link>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ marginTop: "5%" }} sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <hr style={{ border: "0.25px solid #66fcf1" }} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

const NonActivelink = {
    textDecoration: "none",
    color: "#66fcf1"
}

const ActiveLink = {
    textDecoration: "none",
    color: "#66fcf1",
    fontWeight: "bold"
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