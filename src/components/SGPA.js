import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'

import CustomizedCH from './CutomizedCH';
import CustomizedGrade from './CustomizedGrade';
import { color } from '@mui/system';



const SGPA = () => {
    const [credit, setCredit] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [grade, setGrade] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1])
    const [sgpa, setSGPA] = useState(0)


    const updateSGPA = () => {
        console.log("entered")
        var val = 0;
        var count = 0;
        for (var i = 0; i < 10; i++) {
            console.log(grade[i], credit[i])
            const grd = grade[i];
            const crd = credit[i];
            if (grd !== -1 && crd !== 0) {
                val += grd * crd
                count += crd;
                console.log(grd, crd)
            }
        }
        if (count !== 0) {
            setSGPA(val / count);
        }
    }


    const HandleCHChange = (id, event) => {
        const credits = [...credit]
        credits[Number(id)] = event.target.value
        setCredit(credits)
        // useEffect(() => {
        //     updateSGPA()
        // }, credit);
    }

    const handleGradeChange = (id, event) => {
        const tempArr = [...grade]
        tempArr[Number(id)] = event.target.value
        setGrade(tempArr)
        updateSGPA();
    }

    return (
        <div style={{ marginTop: "50px" }}>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}></Grid>
                    <Grid style={secondCol} item xs={5}>
                        <h4 style={{ fontVariant: "small-caps" }}>
                            SGPA {sgpa}
                        </h4>
                    </Grid>

                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[0]} onChange={HandleCHChange.bind(null, "0")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[0]} onChange={handleGradeChange.bind(null, "0")} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[1]} onChange={HandleCHChange.bind(null, "1")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[1]} onChange={handleGradeChange.bind(null, "1")} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[2]} onChange={HandleCHChange.bind(null, "2")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[2]} onChange={handleGradeChange.bind(null, "2")} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[3]} onChange={HandleCHChange.bind(null, "3")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[3]} onChange={handleGradeChange.bind(null, "3")} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[4]} onChange={HandleCHChange.bind(null, "4")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[4]} onChange={handleGradeChange.bind(null, "4")} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[5]} onChange={HandleCHChange.bind(null, "5")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[5]} onChange={handleGradeChange.bind(null, "5")} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[6]} onChange={HandleCHChange.bind(null, "6")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[6]} onChange={handleGradeChange.bind(null, "6")} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[7]} onChange={HandleCHChange.bind(null, "7")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[7]} onChange={handleGradeChange.bind(null, "7")} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[8]} onChange={HandleCHChange.bind(null, "8")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[8]} onChange={handleGradeChange.bind(null, "8")} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[9]} onChange={HandleCHChange.bind(null, "9")} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade value={grade[9]} onChange={handleGradeChange.bind(null, "9")} />
                    </Grid>
                </Grid>
            </Box>
        </div >
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
    marginLeft: "3%"
}

const secondCol = {
    textAlign: "center",
}

const thirdCol = {
    marginLeft: "1%"
}
export default SGPA
