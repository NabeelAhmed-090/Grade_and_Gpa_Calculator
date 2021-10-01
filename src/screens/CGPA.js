import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'
import { Avatar } from '@mui/material';

import { firstCol, containerStyle } from '../components/Styles'
import CustomizedCgpaBox from '../components/CustomizedCgpaBox'


const CGPA = () => {
    const [credit, setCredit] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', ''])
    const [grade, setGrade] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', ''])
    const [cgpa, setCGPA] = useState(0)


    useEffect(() => {
        const updateCGPA = () => {
            var val = 0;
            var count = 0;
            for (var i = 0; i < 13; i++) {
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
            if (event.target.value <= 21 && event.target.value.length <= 2) {
                const credits = [...credit]
                credits[Number(id)] = event.target.value
                setCredit(credits)
            }
        }
    }

    const handleOnChangeCGPA = (id, event) => {
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
        <div style={divStyle}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container style={containerStyle}>
                    <Grid style={firstCol} item xs={3}></Grid>
                    <Grid style={secondCol} item xs={5}>
                        <Avatar sx={avatarStyle}>{cgpa}</Avatar>
                    </Grid>

                </Grid>
            </Box>
            <CustomizedCgpaBox id="0" credit={credit[0]} grade={grade[0]} HandleCHChange={HandleCHChange.bind(null, "0")} handleCgpaChange={handleOnChangeCGPA.bind(null, "0")} />
            <CustomizedCgpaBox id="1" credit={credit[1]} grade={grade[1]} HandleCHChange={HandleCHChange.bind(null, "1")} handleCgpaChange={handleOnChangeCGPA.bind(null, "1")} />
            <CustomizedCgpaBox id="2" credit={credit[2]} grade={grade[2]} HandleCHChange={HandleCHChange.bind(null, "2")} handleCgpaChange={handleOnChangeCGPA.bind(null, "2")} />
            <CustomizedCgpaBox id="3" credit={credit[3]} grade={grade[3]} HandleCHChange={HandleCHChange.bind(null, "3")} handleCgpaChange={handleOnChangeCGPA.bind(null, "3")} />
            <CustomizedCgpaBox id="4" credit={credit[4]} grade={grade[4]} HandleCHChange={HandleCHChange.bind(null, "4")} handleCgpaChange={handleOnChangeCGPA.bind(null, "4")} />
            <CustomizedCgpaBox id="5" credit={credit[5]} grade={grade[5]} HandleCHChange={HandleCHChange.bind(null, "5")} handleCgpaChange={handleOnChangeCGPA.bind(null, "5")} />
            <CustomizedCgpaBox id="6" credit={credit[6]} grade={grade[6]} HandleCHChange={HandleCHChange.bind(null, "6")} handleCgpaChange={handleOnChangeCGPA.bind(null, "6")} />
            <CustomizedCgpaBox id="7" credit={credit[7]} grade={grade[7]} HandleCHChange={HandleCHChange.bind(null, "7")} handleCgpaChange={handleOnChangeCGPA.bind(null, "7")} />
            <CustomizedCgpaBox id="8" credit={credit[8]} grade={grade[8]} HandleCHChange={HandleCHChange.bind(null, "8")} handleCgpaChange={handleOnChangeCGPA.bind(null, "8")} />
            <CustomizedCgpaBox id="9" credit={credit[9]} grade={grade[9]} HandleCHChange={HandleCHChange.bind(null, "9")} handleCgpaChange={handleOnChangeCGPA.bind(null, "9")} />
            <CustomizedCgpaBox id="10" credit={credit[10]} grade={grade[10]} HandleCHChange={HandleCHChange.bind(null, "10")} handleCgpaChange={handleOnChangeCGPA.bind(null, "10")} />
            <CustomizedCgpaBox id="11" credit={credit[11]} grade={grade[11]} HandleCHChange={HandleCHChange.bind(null, "11")} handleCgpaChange={handleOnChangeCGPA.bind(null, "11")} />
            <CustomizedCgpaBox id="12" credit={credit[12]} grade={grade[12]} HandleCHChange={HandleCHChange.bind(null, "12")} handleCgpaChange={handleOnChangeCGPA.bind(null, "12")} />
            <CustomizedCgpaBox id="13" credit={credit[13]} grade={grade[13]} HandleCHChange={HandleCHChange.bind(null, "13")} handleCgpaChange={handleOnChangeCGPA.bind(null, "13")} />
        </div >
    )
}

const avatarStyle = {
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
}

const divStyle = {
    marginTop: "50px"
}

export default CGPA
