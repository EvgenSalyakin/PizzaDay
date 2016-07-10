import {Component} from 'react';

export default class FacebookButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curUser: false,
        };
    }

    submitLogIn(event) {
        event.preventDefault();
        this.setState({curUser: true});

        Meteor.loginWithFacebook({}, function (err) {
            if (err) {
                alert('Произошла ошибка, повторите попытку');
            }
            else {
                //console.log('log')
                //this.setState({curUser: Meteor.user()});
            }


        });

    }

    submitLogOut(event) {
        event.preventDefault();

        this.setState({curUser: false});
        Meteor.logout(function (err) {
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        });


    }

    render() {
        return (
            <div>
                {!this.state.curUser ?
                    (
                        <span>Log in:
                        <batton className="btn btn-warning marg" onClick={this.submitLogIn.bind(this)}>Connect FB</batton>
                        </span>
                    )
                    :
                    (
                        <span>{Meteor.user().services.facebook.name}:
                        <batton className="btn btn-warning marg" onClick={this.submitLogOut.bind(this)}>Log out</batton>
                        </span>
                    )
                }
            </div>
        );
    }
};