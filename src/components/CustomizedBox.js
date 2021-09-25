import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomizedCH from './CutomizedCH'
import CustomizedGrade from './CustomizedGrade'
import CustomizedInputs from './CustomizedInputs';

const CustomizedBox = (props) => {
    return (
        <Box style={boxStyle} sx={{ flexGrow: 1 }}>
            <Grid container style={containerStyle}>
                <Grid style={firstCol} item xs={3}>
                    <CustomizedInputs value="" text="Course Name" />
                </Grid>
                <Grid style={secondCol} item xs={5}>
                    <CustomizedCH value={props.credit} onChange={props.HandleCHChange} />
                </Grid>
                <Grid style={thirdCol} item xs={2}>
                    <CustomizedGrade id={props.id} value={props.grade} onChange={props.handleGradeChange} />
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

const secondCol = {
    textAlign: "center",
    marginTop: "18px"
}

const thirdCol = {
    marginLeft: "1%",
    marginTop: "18px"
}
export default CustomizedBox
