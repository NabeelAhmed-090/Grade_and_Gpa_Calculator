import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'
import { Avatar } from '@mui/material';
import CustomizedCH from './CutomizedCH';
import CustomizedGrade from './CustomizedGrade';
import CustomizedBox from './CustomizedBox'
import CustomizedInputs from './CustomizedInputs';

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
            <CustomizedBox credit={credit[0]} grade={grade[0]} id="0" HandleCHChange={HandleCHChange.bind(null, "0")} handleGradeChange={handleGradeChange.bind(null, "0")} />
            <CustomizedBox credit={credit[1]} grade={grade[1]} id="1" HandleCHChange={HandleCHChange.bind(null, "1")} handleGradeChange={handleGradeChange.bind(null, "1")} />
            <CustomizedBox credit={credit[2]} grade={grade[2]} id="2" HandleCHChange={HandleCHChange.bind(null, "2")} handleGradeChange={handleGradeChange.bind(null, "2")} />
            <CustomizedBox credit={credit[3]} grade={grade[3]} id="3" HandleCHChange={HandleCHChange.bind(null, "3")} handleGradeChange={handleGradeChange.bind(null, "3")} />
            <CustomizedBox credit={credit[4]} grade={grade[4]} id="4" HandleCHChange={HandleCHChange.bind(null, "4")} handleGradeChange={handleGradeChange.bind(null, "4")} />
            <CustomizedBox credit={credit[5]} grade={grade[5]} id="5" HandleCHChange={HandleCHChange.bind(null, "5")} handleGradeChange={handleGradeChange.bind(null, "5")} />
            <CustomizedBox credit={credit[6]} grade={grade[6]} id="6" HandleCHChange={HandleCHChange.bind(null, "6")} handleGradeChange={handleGradeChange.bind(null, "6")} />
            <CustomizedBox credit={credit[7]} grade={grade[7]} id="7" HandleCHChange={HandleCHChange.bind(null, "7")} handleGradeChange={handleGradeChange.bind(null, "7")} />
            <CustomizedBox credit={credit[8]} grade={grade[8]} id="8" HandleCHChange={HandleCHChange.bind(null, "8")} handleGradeChange={handleGradeChange.bind(null, "8")} />
            <CustomizedBox credit={credit[9]} grade={grade[9]} id="9" HandleCHChange={HandleCHChange.bind(null, "9")} handleGradeChange={handleGradeChange.bind(null, "9")} />
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
export default SGPA
