import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { containerStyle } from './Styles';

const Instructions = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid style={instructionStyle} item xs={6}>
                        <ul>
                            <li>enter mca values ranging in between 30-91</li>
                            <li>enter your score ranging in between 0-100</li>
                        </ul>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

const instructionStyle = {
    textAlign: "left",
    font: "small-caption"
}

export default Instructions
