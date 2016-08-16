 import GroupList from '../components/groupList';
//
 import { composeWithTracker } from 'react-komposer';
 import { Groups } from '../../lib/collections';

const composer = ( props, onData ) => {
    if ( Meteor.subscribe('groups').ready() ) {
        const groups = Groups.find().fetch();
        onData( null, {groups} );
    }
};

export default composeWithTracker(composer)(GroupList);

//import { composeWithTracker } from 'react-komposer';
//import { Groups } from '../../collections/collections.js';
//import { GroupNew } from '../../client/components/groupList.jsx';

// const composer = ( props, onData ) => {
//     const subscription = Meteor.subscribe( 'groups' );
//
//     if ( subscription.ready() ) {
//         const groups = Groups.find().fetch();
//         onData( null, { groups } );
//     }
// };
//
//
// export default composeWithTracker(composer)(GroupNew);
//const Container = composeWithTracker( composer, Loader )( List );