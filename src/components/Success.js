import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

class Success extends Component {
    startOver = e => {
        e.preventDefault();
        this.props.startOver();
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar>Success - Data Entered</AppBar>
                    <Button
                        // label="Continue"
                        variant="contained"
                        style={styles.button}
                        onClick={this.startOver}
                    >
                        Enter New User Information
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

export default Success;
