import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../globalStyle.css"

const Header = () => {
    return (
        // <Container style={containerStyle}>
        //     <Row>
        //         <Col style={firstCol} xs={3}>
        //             Grade
        //         </Col>
        //         <Col style={secondCol} xs={5}>
        //             SGPA
        //         </Col>
        //         <Col style={thirdCol} xs={3}>
        //             CGPA
        //         </Col>
        //     </Row>
        //    
        // </Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid className="headings" container style={containerStyle}>
                <Grid style={firstCol} item xs={3}>
                    Grade
                </Grid>
                <Grid style={secondCol} item xs={5}>
                    SGPA
                </Grid>
                <Grid style={thirdCol} item xs={3}>
                    CGPA
                </Grid>
            </Grid>
        </Box>

    )
}

const firstCol = {
    textAlign: "right",
    marginTop: "5%",
    marginLeft: "3%"
}

const secondCol = {
    textAlign: "center",
    marginTop: "5%"
}

const thirdCol = {
    textAlign: "left",
    marginTop: "5%"
}

const containerStyle = {
    color: "#66fcf1"
}

export default Header