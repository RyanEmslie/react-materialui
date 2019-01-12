import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar>Enter Personal Details</AppBar>
                    <TextField
                        hinttext="Enter Your Occupation"
                        label="Occupatoin"
                        onChange={handleChange("occupation")}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        hinttext="Enter Your City"
                        label="City"
                        onChange={handleChange("city")}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hinttext="Enter Your Bio"
                        label="Bio"
                        onChange={handleChange("bio")}
                        defaultValue={values.bio}
                    />
                    <br />
                    <Button
                        // label="Back"
                        variant="contained"
                        style={styles.button}
                        onClick={this.back}
                    >
                        Back
                    </Button>
                    <Button
                        // label="Continue"
                        variant="contained"
                        style={styles.button}
                        onClick={this.continue}
                    >
                        Next
                    </Button>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
};

export default FormPersonalDetails;
