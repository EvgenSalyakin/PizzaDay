import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {Table,Batton} from 'react-bootstrap';

import { Groups } from '../../lib/collections';

import Group from './Group.jsx';

//import FacebookButton from './FacebookButton';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        Groups.insert({
            name: "New Group",
            status: "Ordering",
            owner: Meteor.userId(),
            createdAt: new Date(), // current time
        });

        // Clear form
        //ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    renderGroups() {
        //return this.props.groups.map((group) => (
        let filteredGroups = this.props.groups;
        //if (this.state.hideDelivered) {
        //filteredGroups = filteredGroups.filter(group => group.delivered);
        //}
        return filteredGroups.map((group) => (
            <Group key={group._id} group={group} />
        ));
    }

    onSubmit(event) {
        event.preventDefault();
        if (!Meteor.loggingIn() && !Meteor.user()) {
            Meteor.loginWithFacebook({
            }, function (err) {
                if (err) {
                    console.log('Произошла ошибка при авторизации Facebook!!!');
                }
                else {}
            });
        } else {
            Meteor.logout(function (err) {
                if (err) {
                    throw new Meteor.Error("Logout failed");
                }
            });
        }
    }

    render() {
        let textInput;
        let textWelcome;
        if (!Meteor.loggingIn() && !Meteor.user()) {
            textWelcome = 'Not authorized';
            textInput = 'Log in';
        } else {
            textWelcome = 'Welcome ';//+Meteor.user().profile.name;//+this.currentUser.services.facebook.name;
            textInput = 'Log out';
        }
        //<FacebookButton />
        return (

        <div className="container-fluid">
            <header>
                <h1 className="text-xs-center">Pizza Day</h1>
                <div className="row text-xs-right">

                    <div>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            {textWelcome}:
                            <button id='fbbutton' className="btn btn-warning marg" type="submit" value="Submit">{textInput}</button>
                        </form>
                    </div>
                </div>
            </header>
            <div className="content">
                <div className="container-fluid">

                    <batton className="btn btn-warning marg" onClick={this.handleSubmit.bind(this)}>Add</batton>
                    <Table  bordered condensed hover>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Command</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderGroups()}
                        </tbody>
                    </Table>
                </div>
            </div>
            <footer>
                <p className="text-xs-center">Copyright &copy; 2016 by SkyOrion</p>
            </footer>
        </div>


        );
    }
}

App.propTypes = {
    groups: PropTypes.array.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    currentUser: PropTypes.object,
};

export default createContainer(() => {
    //Meteor.subscribe('tasks');
    Meteor.subscribe("userData");

    return {
        groups: Groups.find({}, { sort: { createdAt: -1 } }).fetch(),
        incompleteCount: Groups.find({ checked: { $ne: true } }).count(),
        currentUser: Meteor.user(),
    };
}, App);