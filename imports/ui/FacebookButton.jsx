import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';

export default class FacebookButton extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.state = {
    //     //     loggingIn: !(!Meteor.loggingIn() && !Meteor.user()),
    //     //     curUser: Meteor.user()
    //     // };
    // }

    onSubmit(event) {
        event.preventDefault();
        if (!Meteor.loggingIn() && !Meteor.user()) {
            Meteor.loginWithFacebook({
                //requestPermissions: ['user_friends', 'public_profile', 'email'],
                //redirectUrl: '/'
            }, function (err) {
                if (err) {
                    // this.setState({
                    //     curUser: null,
                    //     loggingIn: false
                    // });
                    console.log('Произошла ошибка при авторизации Facebook!!!');
                }
                else {
                    //console.log('log')
                    // this.setState({
                    //     curUser: Meteor.user(),
                    //     loggingIn: true
                    // });
                    //window.location.reload(true);
                    //FlowRouter.go('/home');
                    //event.render(<button id="render" className="btn btn-warning marg" type="submit" value="Submit">Log out</button>, document.getElementById('FBbutton'));
                }
            });
        } else {
            Meteor.logout(function (err) {
                if (err) {
                    throw new Meteor.Error("Logout failed");
                }
            });
            // this.setState({
            //     curUser: null,
            //     loggingIn: false
            // });
            //FlowRouter.go('/');
        }
        // this.setState({
        //     loggingIn: !this.state.loggingIn,
        //    // curUser: Meteor.user()
        // });
        //FlowRouter.go('/home');
    }

    render() {
        let textInput;// = //this.state.loggingIn?('Log out'):('Log in');
        let textWelcome;
        if (!Meteor.loggingIn() && !Meteor.user()) {    //(!Meteor.loggingIn() && !Meteor.user()) {(this.state.loggingIn)
            textWelcome = 'Not authorized';
            textInput = 'Log in';
        } else {
            textWelcome = 'Welcome ';//+this.props.currentUser;//Meteor.user().services.facebook.name;
            textInput = 'Log out';
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
                    <button id='fbbutton' className="btn btn-warning marg" type="submit" value="Submit">{textInput}</button>
                </form>
            </div>
        );
    }
};