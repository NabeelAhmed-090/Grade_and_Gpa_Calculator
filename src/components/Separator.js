import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Separator = () => {
    return (
        <Box style={boxStyle} sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <hr style={lineStyle} />
                </Grid>
            </Grid>
        </Box>
    )
}

const boxStyle = {
    marginTop: "80px"
}

const lineStyle = {
    border: "0.25px solid #66fcf1"
}

export default Separator
