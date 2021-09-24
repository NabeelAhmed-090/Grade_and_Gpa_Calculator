import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomizedInputs from './CustomizedInputs';
import { getGrade } from './function'
import { Avatar } from '@mui/material';


const Grade = () => {
    const [average, setAverage] = useState('')
    const [score, setScore] = useState('')
    const [grade, setGrade] = useState('?')

    const updateGrade = () => {
        console.log(average, score)
        if (average !== '' && score !== '') {
            var x = getGrade(Number(average), Number(score))
            setGrade(x)
        }
        else {
            setGrade('?')
        }
    }

    useEffect(() => {
        updateGrade()
    }, [average, score]);

    const handleOnChangeAverage = (event) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            if (event.target.value <= 100) {
                setAverage(event.target.value)
            }
        }
    }

    const handleOnChangeScore = (event) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            if (event.target.value <= 100) {
                setScore(event.target.value)
            }
        }
    }

    return (
        <div style={{ marginTop: "150px" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid item xs={3}></Grid>
                    <Grid style={{ textAlign: "center" }} item xs={6}>
                        <CustomizedInputs value={average} onChange={handleOnChangeAverage} text="MCA (Rounded)" />
                    </Grid>
                </Grid>
            </Box>
            <Box style={rowStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid item xs={3}></Grid>
                    <Grid style={{ textAlign: "center" }} item xs={6}>
                        <CustomizedInputs value={score} onChange={handleOnChangeScore} text="Your Score" />
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ marginTop: "100px", alignItems: "center" }} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid item style={{ marginLeft: "4%" }} xs={3}></Grid>
                    <Grid style={{ border: "1px solid white" }} item xs={5}>
                        <Avatar sx={{ bgcolor: "white", color: "black", margin: "auto", padding: "1px" }}>{grade}</Avatar>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}


const rowStyle = {
    marginTop: "7%"
}
const containerStyle = {
    color: "white",
}

export default Grade




