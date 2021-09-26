import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomizedInputs from './CustomizedInputs';
import { getGrade } from './function'
import { Avatar } from '@mui/material';
import { containerStyle } from './Styles'
import Separator from './Separator';
import Emoji from './Emoji'
import Instructions from './Instructions';


const Grade = () => {
    const [average, setAverage] = useState('')
    const [score, setScore] = useState('')
    const [grade, setGrade] = useState(['?', '?', '?'])



    useEffect(() => {
        const updateGrade = () => {
            var ret = ['-', '-', '-']
            if (average !== '' && score !== '') {
                ret = getGrade(average, score, setGrade)
            }
            else {
                setGrade(ret)
            }
        }
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
        <>
            <Instructions />
            <div style={divStyle}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container style={containerStyle}>
                        <Grid item xs={3}></Grid>
                        <Grid style={gridStyle} item xs={6}>
                            <CustomizedInputs value={average} onChange={handleOnChangeAverage} text="MCA (Rounded)" />
                        </Grid>
                    </Grid>
                </Box>
                <Box style={rowStyle} sx={{ flexGrow: 1 }}>
                    <Grid container style={containerStyle}>
                        <Grid item xs={3}></Grid>
                        <Grid style={gridStyle} item xs={6}>
                            <CustomizedInputs value={score} onChange={handleOnChangeScore} text="Your Score" />
                        </Grid>
                    </Grid>
                </Box>

                <Separator />

                <Box style={{ marginTop: "60px", alignItems: "center" }} sx={{ flexGrow: 1 }}>
                    <Grid container style={containerStyle}>
                        <Grid item style={{ marginLeft: "4%" }} xs={3}></Grid>
                        <Grid item xs={5}>
                            <Avatar sx={avatarStyle}>{grade[0] === '?' ? <Emoji symbol="😕" label="confused" /> : grade[0]}</Avatar>
                        </Grid>
                    </Grid>
                </Box>
                <Box style={{ marginTop: "60px", alignItems: "center" }} sx={{ flexGrow: 1 }}>
                    <Grid container style={containerStyle}>
                        <Grid className="Avatar" display="flex" alignItems="right" justifyContent="right" item xs={4}>
                            <Avatar sx={avatarStyle_1}>{grade[2] === '?' ? <Emoji symbol="😕" label="confused" /> : grade[1]}</Avatar>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid className="Avatar" display="flex" alignItems="left" justifyContent="left" item xs={4}>
                            <Avatar sx={avatarStyle_1}>{grade[1] === '?' ? <Emoji symbol="😕" label="confused" /> : grade[2]}</Avatar>
                        </Grid>
                    </Grid>
                </Box>
            </div >
        </>
    )
}

const divStyle = {
    marginTop: "80px"
}

const gridStyle = {
    textAlign: "center"
}

const avatarStyle = {
    bgcolor: "white",
    margin: "auto",
    padding: "1px",
    width: "80px",
    height: "80px",
    color: "#66fcf1",
    fontWeight: "1000"
}

const avatarStyle_1 = {
    bgcolor: "white",
    padding: "1px",
    width: "80px",
    height: "80px",
    color: "#66fcf1",
    fontWeight: "700"
}

const rowStyle = {
    marginTop: "7%"
}

export default Grade




