import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@mui/material";

const focusedColor = "#66fcf1"
const styles = {
    root: {
        "& label": {
            color: "white"
        },
        multilineColor: {
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
        "& .MuiInputBase-input": {
            color: "white"
        },
        borderBottom: "1px solid white",
        color: "white",
    },
    input: {
        color: "white",
        widht: "14vh",
        boxShadow: "0 6px 6px -6px #ccc"
    }

};

function CustomizedInputs(props) {
    const { classes } = props;

    return (
        <TextField
            className={classes.root}
            InputProps={{
                className: classes.input,
            }}
            value={props.value}
            onChange={props.onChange}
            id="standard-basic"
            label={props.text}
            variant="standard" />
    );
}

CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);