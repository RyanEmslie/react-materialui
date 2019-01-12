import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    };

    render() {
        const {
            values: { firstName, lastName, email, occupation, city, bio }
        } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar>Confirm User Data</AppBar>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="First Name"
                                secondary={firstName}
                            />
                            <ListItemText
                                primary="Last Name"
                                secondary={lastName}
                            />
                            <ListItemText primary="Email" secondary={email} />
                            <ListItemText
                                primary="Occupation"
                                secondary={occupation}
                            />
                            <ListItemText primary="City" secondary={city} />
                            <ListItemText primary="Bio" secondary={bio} />
                        </ListItem>
                    </List>
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
                        Confirm and Continue
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

export default Confirm;
