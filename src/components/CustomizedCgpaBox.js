import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomizedInputs from './CustomizedInputs';

const CustomizedCgpaBox = (props) => {
    return (
        <Box key={props.id} style={boxStyle} sx={{ flexGrow: 1 }}>
            <Grid container style={containerStyle}>
                <Grid item xs={1}></Grid>
                <Grid style={firstCol} item xs={3}>
                    <CustomizedInputs value={props.credit} onChange={props.HandleCHChange} text="Credit Hours" />
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid style={thirdCol} item xs={3}>
                    <CustomizedInputs value={props.grade} onChange={props.handleCgpaChange} text="SGPA" />
                </Grid>
            </Grid>
        </Box>
    )
}
const boxStyle = {
    marginTop: "3%"
}

const containerStyle = {
    color: "white",
}

const firstCol = {
    textAlign: "right",
    marginLeft: "3%",
    marginTop: "2px"
}

const thirdCol = {
    marginLeft: "1%",
    marginTop: "2px"
}

export default CustomizedCgpaBox
