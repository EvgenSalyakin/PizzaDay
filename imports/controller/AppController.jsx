import {composeWithTracker} from 'react-komposer';
import App from '../ui/App';
import {Meteor} from 'meteor/meteor';
//import Loader from './../../ui/components/Loader';

const composition = (props, onData) => {
    if(Meteor.subscribe('users').ready()) {
        if (!Meteor.loggingIn() && !Meteor.user()) {
            setTimeout(() => {
                FlowRouter.go('/sign-up')
            });
        }
        else if(Meteor.user()) {
            let access = false;

            Meteor.user().profile.role.forEach(item => {
                if (item.role === 'staff') {
                    access = true;
                }
            });

            if(Meteor.user().profile.accessAdmin === 0 && !access) {
                setTimeout(() => {
                    FlowRouter.go('/sign-up')
                });
            }
            else {
                onData(null, props)
            }
        }
        else {
            onData(null, props)
        }
    }
};

export default composeWithTracker(composition, )(App);