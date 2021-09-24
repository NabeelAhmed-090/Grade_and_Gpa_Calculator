import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Select } from "@material-ui/core";
import { MenuItem } from "@mui/material";

const focusedColor = "#66fcf1"
const styles = {
    root: {
        color: "white",
        textAlign: "center",
        "& label": {
            color: "white"
        },
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
        width: "15vh"
    },
};

function CustomizedCH(props) {
    const { classes } = props;

    return (
        <Select
            onChange={props.onChange}
            className={classes.root}
            labelId="demo-simple-select-label"
            value={props.value}
            label="Credit Hour"
            placeholder="Credit Hour"
            variant="standard"
        >
            <MenuItem value={-1}>Grade</MenuItem>
            <MenuItem value={0}>F</MenuItem>
            <MenuItem value={1}>D</MenuItem>
            <MenuItem value={1.33}>D+</MenuItem>
            <MenuItem value={1.67}>C-</MenuItem>

            <MenuItem value={2}>C</MenuItem>
            <MenuItem value={2.33}>C+</MenuItem>
            <MenuItem value={2.67}>B-</MenuItem>
            <MenuItem value={3}>B</MenuItem>

            <MenuItem value={3.33}>B+</MenuItem>
            <MenuItem value={3.67}>A-</MenuItem>
            <MenuItem value={4}>A</MenuItem>
            <MenuItem value={4}>A+</MenuItem>
        </Select>
    );
}

CustomizedCH.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedCH);