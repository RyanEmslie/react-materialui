import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/core/icons/Menu";

//
const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar position="static">Enter User Information</AppBar>
                    <TextField
                        hinttext="Enter Your First Name"
                        label="First Name"
                        onChange={handleChange("firstName")}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hinttext="Enter Your Last Name"
                        label="Last Name"
                        onChange={handleChange("lastName")}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hinttext="Enter Your Email Name"
                        label="Email Name"
                        onChange={handleChange("email")}
                        defaultValue={values.email}
                    />
                    <br />
                    <Button
                        label="Continue"
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

export default FormUserDetails;
