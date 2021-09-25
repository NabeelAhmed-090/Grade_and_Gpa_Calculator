import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Select } from "@material-ui/core";
import { MenuItem } from "@mui/material";
import React from 'react'
import '../globalStyle.css'

const focusedColor = "#66fcf1"
const styles = {
    root: {
        color: "white",
        textAlign: "center",
        "& label": {
            color: "white"
        },
        "& label.Mui-focused": {
            color: focusedColor
        },
        // focused color for input with variant='standard'
        "& .MuiInput-underline:after": {
            borderBottomColor: "white"
        },
        // focused color for input with variant='filled'
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: "white"
        },
        // focused color for input with variant='outlined'
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: focusedColor
            }
        },
        borderBottom: "1px solid white",
        width: "12vh",
        marginTop: "0%"
    },
};

function CustomizedCH(props) {
    const { classes } = props;

    return (
        <Select
            onChange={props.onChange}
            className={classes.root}
            value={props.value}
            labelId="demo-simple-select-label"
            label="Credit Hour"
            variant="standard"
        >
            <MenuItem value={0}>Credit Hour</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
        </Select >
    );
}

CustomizedCH.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedCH);