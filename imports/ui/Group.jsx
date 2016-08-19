import React, { Component, PropTypes } from 'react';

import { Groups } from '../../lib/collections';

// Task component - represents a single todo item
export default class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edited: false
        };
    }

    deleteThisGroup() {
        Groups.remove(this.props.group._id);
    }

    editThisGroup() {
         this.setState({
             edited: !this.state.edited
         });
    }

    saveThisGroup() {
        Groups.update(this.props.group._id, {
            $set: { name: this.refs.name.value,
                status: this.refs.status.value,
                author: this.refs.author.value
            }
        });
        this.setState({
            edited: !this.state.edited
        });
    }

    render() {
        // Give tasks a different className when they are checked off,
        // so that we can style them nicely in CSS
        //const groupClassName = this.props.group.checked ? 'checked' : '';

        return (
            <tr>
                <td>{this.props.group.name}</td>
                <td>{this.props.group.status}</td>
                <td>
                    <batton className="btn btn-warning marg" onClick={this.editThisGroup.bind(this)}>Edit</batton>
                    <batton className="btn btn-warning marg" onClick={this.deleteThisGroup.bind(this)}>Delete</batton>
                </td>
            </tr>
        );
    }
}

//<batton className="btn btn-warning marg" onClick={this.editThisGroup.bind(this)}>Edit</batton>
//<batton className="btn btn-warning marg" onClick={this.deleteThisGroup.bind(this)}>Delete</batton>

Group.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    group: PropTypes.object.isRequired
};
