import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomizedInputs from './CustomizedInputs';


const Grade = () => {
    const [average, setAverage] = useState('')
    const [score, setScore] = useState('')

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
                        <CustomizedInputs value={average} onChange={handleOnChangeAverage} text="Enter Average" />
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




