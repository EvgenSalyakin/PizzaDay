import React from 'react';

export default class FacebookButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggingIn: !(!Meteor.loggingIn() && !Meteor.user()),
            curUser: Meteor.user()
        };
    }

    onSubmit(event) {
        event.preventDefault();
        if (!Meteor.loggingIn() && !Meteor.user()) {
            Meteor.loginWithFacebook({
                requestPermissions: ['user_friends', 'public_profile', 'email']
            }, function (err) {
                if (err) {
                    this.setState({
                        curUser: null,
                        loggingIn: false
                    });
                    alert('Произошла ошибка, повторите попытку');
                }
                else {
                    //console.log('log')
                    this.setState({
                        curUser: Meteor.user(),
                        loggingIn: true
                    });
                }
            });
        } else {
            Meteor.logout(function (err) {
                if (err) {
                    throw new Meteor.Error("Logout failed");
                }
            });
            this.setState({
                curUser: null,
                loggingIn: false
            });
        }
        // this.setState({
        //     loggingIn: !this.state.loggingIn,
        //    // curUser: Meteor.user()
        // });
    }

    render() {
        let textInput;// = //this.state.loggingIn?('Log out'):('Log in');
        let textWelcome;
        if (this.state.loggingIn) {    //(!Meteor.loggingIn() && !Meteor.user()) {
            textWelcome = 'Welcome ';//+Meteor.user().profile.name;
            textInput = 'Log out';
        } else {
            textWelcome = 'Not authorized';
            textInput = 'Log in';
        }
        //let textWelcome = this.state.loggingIn?(Meteor.user().services.facebook.name):('Not authorized');
        return (
            <div>
                {/*!Meteor.loggingIn() && !Meteor.user() ?
                    (
                        <form onSubmit={}>{/*Meteor.user().services.facebook.name}:
                        <batton className="btn btn-warning marg" onClick={this.submitLogOut.bind(this)}>Log out</batton>
                        </form>
                    )
                    :
                    (
                        <form onSubmit={}>Log in:
                        <batton className="btn btn-warning marg"
                                onClick={this.submitLogIn.bind(this)}>Connect FB</batton>
                        </form>

                    )
                */}
                <form onSubmit={this.onSubmit.bind(this)}>
                    {textWelcome}:
                    <button className="btn btn-warning marg" type="submit" value="Submit">{textInput}</button>
                </form>
            </div>
        );
    }
};