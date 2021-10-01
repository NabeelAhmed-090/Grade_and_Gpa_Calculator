import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'
import { Avatar } from '@mui/material';

import CustomizedBox from '../components/CustomizedBox'
import { firstCol, containerStyle } from '../components/Styles'

const SGPA = () => {
    const [credit, setCredit] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [grade, setGrade] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1])
    const [course, setCourse] = useState(['', '', '', '', '', '', '', '', '', '', ''])
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

    const handleCourseChange = (id, event) => {
        if (event.target.value.length <= 30) {
            const tempArr = [...course]
            tempArr[Number(id)] = event.target.value
            setCourse(tempArr)
        }
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
            <CustomizedBox credit={credit[0]} grade={grade[0]} course={course[0]} id="0" HandleCHChange={HandleCHChange.bind(null, "0")} handleGradeChange={handleGradeChange.bind(null, "0")} handleCourseChange={handleCourseChange.bind(null, "0")} />
            <CustomizedBox credit={credit[1]} grade={grade[1]} course={course[1]} id="1" HandleCHChange={HandleCHChange.bind(null, "1")} handleGradeChange={handleGradeChange.bind(null, "1")} handleCourseChange={handleCourseChange.bind(null, "1")} />
            <CustomizedBox credit={credit[2]} grade={grade[2]} course={course[2]} id="2" HandleCHChange={HandleCHChange.bind(null, "2")} handleGradeChange={handleGradeChange.bind(null, "2")} handleCourseChange={handleCourseChange.bind(null, "2")} />
            <CustomizedBox credit={credit[3]} grade={grade[3]} course={course[3]} id="3" HandleCHChange={HandleCHChange.bind(null, "3")} handleGradeChange={handleGradeChange.bind(null, "3")} handleCourseChange={handleCourseChange.bind(null, "3")} />
            <CustomizedBox credit={credit[4]} grade={grade[4]} course={course[4]} id="4" HandleCHChange={HandleCHChange.bind(null, "4")} handleGradeChange={handleGradeChange.bind(null, "4")} handleCourseChange={handleCourseChange.bind(null, "4")} />
            <CustomizedBox credit={credit[5]} grade={grade[5]} course={course[5]} id="5" HandleCHChange={HandleCHChange.bind(null, "5")} handleGradeChange={handleGradeChange.bind(null, "5")} handleCourseChange={handleCourseChange.bind(null, "5")} />
            <CustomizedBox credit={credit[6]} grade={grade[6]} course={course[6]} id="6" HandleCHChange={HandleCHChange.bind(null, "6")} handleGradeChange={handleGradeChange.bind(null, "6")} handleCourseChange={handleCourseChange.bind(null, "6")} />
            <CustomizedBox credit={credit[7]} grade={grade[7]} course={course[7]} id="7" HandleCHChange={HandleCHChange.bind(null, "7")} handleGradeChange={handleGradeChange.bind(null, "7")} handleCourseChange={handleCourseChange.bind(null, "7")} />
            <CustomizedBox credit={credit[8]} grade={grade[8]} course={course[8]} id="8" HandleCHChange={HandleCHChange.bind(null, "8")} handleGradeChange={handleGradeChange.bind(null, "8")} handleCourseChange={handleCourseChange.bind(null, "8")} />
            <CustomizedBox credit={credit[9]} grade={grade[9]} course={course[9]} id="9" HandleCHChange={HandleCHChange.bind(null, "9")} handleGradeChange={handleGradeChange.bind(null, "9")} handleCourseChange={handleCourseChange.bind(null, "9")} />
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

const secondCol = {
    textAlign: "center",
    marginTop: "18px"
}

export default SGPA
