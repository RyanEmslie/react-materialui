import React, { Component } from "react";

import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

// The location of the state for the app
// state.step will be used to navigate the different form pages
class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        cite: "",
        bio: ""
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Proceed to previous step
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Start at first step
    startOver = () => {
        const { step } = this.state;
        this.setState({
            step: step - 3,
            firstName: "",
            lastName: "",
            email: "",
            occupation: "",
            cite: "",
            bio: ""
        });
    };

    // Handle field changes
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const {
            firstName,
            lastName,
            email,
            occupation,
            city,
            bio
        } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        previousStep={this.previousStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        previousStep={this.previousStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                );
            case 4:
                return <Success startOver={this.startOver} />;
            default:
                console.log("Sorry, I guess the app is broken");
        }
    }
} //end class UserForm

export default UserForm;
