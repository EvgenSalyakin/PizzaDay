import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import {Table,Batton} from 'react-bootstrap';

import { Groups } from '../api/groups.js';

import Group from './Group.jsx';

// GroupsLayout component - represents the whole app
export default class App extends Component {
//export default class GroupsLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideuji999uui67777Delivered: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        //const name = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Groups.insert({
            name: "New Group",
            status: "Ordering",
            createdAt: new Date(), // current time
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
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

    render() {
        return (
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
        );
    }
}
   App.propTypes = {
//GroupsLayout.propTypes = {
    groups: PropTypes.array.isRequired,
    Count: PropTypes.number.isRequired,
};

export default createContainer(() => {
    return {
        groups: Groups.find({}, { sort: { createdAt: -1 } }).fetch(),
        Count: Groups.find({}).count()
    };
//}, GroupsLayout);
}, App);