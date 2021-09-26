import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import '../globalStyle.css'
import Separator from './Separator';



const Header = () => {
    const [grade, setGrade] = useState(true)
    const [sgpa, setSgpa] = useState(false)
    const [cgpa, setCgpa] = useState(false)

    const updateGrade = () => {
        setGrade(true)
        setSgpa(false)
        setCgpa(false)
    }
    const updateSgpa = () => {
        setGrade(false)
        setSgpa(true)
        setCgpa(false)
    }
    const updateCgpa = () => {
        setGrade(false)
        setSgpa(false)
        setCgpa(true)
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid style={firstCol} item xs={3}>
                        <Link style={grade ? ActiveLink : NonActivelink} onClick={updateGrade} to="/">Grade</Link>
                    </Grid>
                    <Grid style={secondCol} item xs={5}>
                        <Link style={sgpa ? ActiveLink : NonActivelink} onClick={updateSgpa} to="/SGPA">SGPA</Link>
                    </Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <Link style={cgpa ? ActiveLink : NonActivelink} onClick={updateCgpa} to="/CGPA">CGPA</Link>
                    </Grid>
                </Grid>
            </Box>
            <Separator />
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