import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'
import { Avatar } from '@mui/material';
import CustomizedCH from './CutomizedCH';
import CustomizedGrade from './CustomizedGrade';


const SGPA = () => {
    const [credit, setCredit] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [grade, setGrade] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1])
    const [sgpa, setSGPA] = useState(0)



    useEffect(() => {
        const updateSGPA = () => {
            var val = 0;
            var count = 0;
            for (var i = 0; i < 10; i++) {
                const grd = grade[i];
                const crd = credit[i];
                if (grd !== -1 && crd !== 0) {
                    val += grd * crd
                    count += crd;
                }
            }
            if (count !== 0) {
                setSGPA((val / count).toFixed(2));
            }
        }
        updateSGPA()
    }, [credit, grade, sgpa]);

    const HandleCHChange = (id, event) => {
        const credits = [...credit]
        credits[Number(id)] = event.target.value
        setCredit(credits)
    }

    const handleGradeChange = (id, event) => {
        const tempArr = [...grade]
        tempArr[Number(id)] = event.target.value
        setGrade(tempArr)
    }

    return (
        <div style={{ marginTop: "50px" }}>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}></Grid>
                    <Grid style={secondCol} item xs={5}>
                        <Avatar sx={avatarStyle_1}>{sgpa}</Avatar>
                    </Grid>

                </Grid>
            </Box>

            <Box style={boxStyle} sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}>
                        <CustomizedCH value={credit[0]} onChange={HandleCHChange.bind(null, "0")} />
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                    <Grid style={thirdCol} item xs={2}>
                        <CustomizedGrade id="0" value={grade[0]} onChange={handleGradeChange.bind(null, "0")} />
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
                        <CustomizedGrade id="1" value={grade[1]} onChange={handleGradeChange.bind(null, "1")} />
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
                        <CustomizedGrade id="2" value={grade[2]} onChange={handleGradeChange.bind(null, "2")} />
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
                        <CustomizedGrade id="3" value={grade[3]} onChange={handleGradeChange.bind(null, "3")} />
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
                        <CustomizedGrade id="4" value={grade[4]} onChange={handleGradeChange.bind(null, "4")} />
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
                        <CustomizedGrade id="5" value={grade[5]} onChange={handleGradeChange.bind(null, "5")} />
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
                        <CustomizedGrade id="6" value={grade[6]} onChange={handleGradeChange.bind(null, "6")} />
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
                        <CustomizedGrade id="7" value={grade[7]} onChange={handleGradeChange.bind(null, "7")} />
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
                        <CustomizedGrade id="8" value={grade[8]} onChange={handleGradeChange.bind(null, "8")} />
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
                        <CustomizedGrade id="9" value={grade[9]} onChange={handleGradeChange.bind(null, "9")} />
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

const avatarStyle_1 = {
    bgcolor: "white",
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
    marginTop: "1%"
}

const secondCol = {
    textAlign: "center",
}

const thirdCol = {
    marginLeft: "1%",
    marginTop: "1%"
}
export default SGPA
