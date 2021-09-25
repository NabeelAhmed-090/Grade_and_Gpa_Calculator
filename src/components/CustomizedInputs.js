import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@mui/material";

const focusedColor = "#66fcf1"
const styles = {
    root: {
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
        borderBottom: "1px solid white"
    },
    input: {
        color: "white",
        widht: "15vh",
        boxShadow: "0 6px 6px -6px #ccc"
        // boxShadow: "0 0 2px -2px #ccc"
    }

};

function CustomizedInputs(props) {
    const { classes } = props;

    return (
        <TextField
            maxLength="3"
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