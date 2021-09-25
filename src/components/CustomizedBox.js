import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomizedInputs from './CustomizedInputs';
import CustomizedCH from './CutomizedCH'
import CustomizedGrade from './CustomizedGrade'

const CustomizedBox = (props) => {
    return (
        <Box key={props.id} style={boxStyle} sx={{ flexGrow: 1 }}>
            <Grid container style={containerStyle}>
                <Grid style={firstCol} item xs={3}>
                    <CustomizedInputs value={props.course} onChange={props.handleCourseChange} text="Course Name" />
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
    color: "white",
    marginTop: "3%"
}

const containerStyle = {
    color: "white"
}

const firstCol = {
    color: "white",
    textAlign: "right",
    marginLeft: "3%",
    marginTop: "2px",
}

const secondCol = {
    color: "white",
    textAlign: "center",
    marginTop: "18px"
}

const thirdCol = {
    marginLeft: "1%",
    color: "white",
    marginTop: "18px"
}
export default CustomizedBox
