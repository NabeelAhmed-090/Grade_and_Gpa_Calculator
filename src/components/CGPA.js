import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'
import { Avatar } from '@mui/material';
import CustomizedInputs from './CustomizedInputs';


const CGPA = () => {
    const [credit, setCredit] = useState(['', '', '', '', '', '', '', '', '', '', ''])
    const [grade, setGrade] = useState(['', '', '', '', '', '', '', '', '', '', ''])
    const [cgpa, setCGPA] = useState(0)


    useEffect(() => {
        const updateCGPA = () => {
            var val = 0;
            var count = 0;
            for (var i = 0; i < 10; i++) {
                const grd = grade[i];
                const crd = credit[i];
                if (grd !== '' && crd !== '') {
                    val += Number(grd) * Number(crd)
                    count += Number(crd);
                }
            }
            if (count !== 0) {
                setCGPA((val / count).toFixed(2));
            }
        }
        updateCGPA()
    }, [credit, grade, cgpa]);

    const HandleCHChange = (id, event) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            if (event.target.value <= 21) {
                const credits = [...credit]
                credits[Number(id)] = event.target.value
                setCredit(credits)
            }
        }
    }

    const handleOnChangeCGPA = (id, event) => {
        // const re = /^[0-9\b]+$/;
        const re = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+){0,3}$/
        if (event.target.value === '' || re.test(event.target.value)) {
            if (event.target.value <= 4 && event.target.value.length <= 4) {
                const tempArr = [...grade]
                tempArr[Number(id)] = event.target.value
                setGrade(tempArr)
            }
        }
    }

    return (
        <div style={{ marginTop: "50px" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}></Grid>
                    <Grid style={secondCol} item xs={5}>
                        <Avatar sx={avatarStyle_1}>{cgpa}</Avatar>
                    </Grid>

                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[0]} onChange={HandleCHChange.bind(null, "0")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[0]} onChange={handleOnChangeCGPA.bind(null, "0")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[1]} onChange={HandleCHChange.bind(null, "1")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[1]} onChange={handleOnChangeCGPA.bind(null, "1")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[2]} onChange={HandleCHChange.bind(null, "2")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[2]} onChange={handleOnChangeCGPA.bind(null, "2")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[3]} onChange={HandleCHChange.bind(null, "3")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[3]} onChange={handleOnChangeCGPA.bind(null, "3")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[4]} onChange={HandleCHChange.bind(null, "4")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[4]} onChange={handleOnChangeCGPA.bind(null, "4")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[5]} onChange={HandleCHChange.bind(null, "5")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[5]} onChange={handleOnChangeCGPA.bind(null, "5")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[6]} onChange={HandleCHChange.bind(null, "6")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[6]} onChange={handleOnChangeCGPA.bind(null, "6")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[7]} onChange={HandleCHChange.bind(null, "7")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[7]} onChange={handleOnChangeCGPA.bind(null, "7")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[8]} onChange={HandleCHChange.bind(null, "8")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[8]} onChange={handleOnChangeCGPA.bind(null, "8")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedInputs value={credit[9]} onChange={HandleCHChange.bind(null, "9")} text="Credit Hours" />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={3}>
                        <CustomizedInputs value={grade[9]} onChange={handleOnChangeCGPA.bind(null, "9")} text="SGPA" />
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

const avatarStyle_1 = {
    bgcolor: "white",
    // color: "black",
    padding: "1px",
    width: "65px",
    height: "65px",
    color: "#66fcf1",
    fontWeight: "700",
    margin: "auto"
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
}

const thirdCol = {
    marginLeft: "1%",
    marginTop: "2px"
}
export default CGPA
