import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check';

import { Orders, OrderLines, Discounts, Customers } from '../lib/collections';

Meteor.startup(() => {

    // Meteor.publish('users', function(getValQuery) {
    //     check(getValQuery, Match.OneOf(String, undefined));
    //
    //let user = Meteor.users.find({_id: this.userId}).fetch();
    //    return User = Meteor.users.find({_id: this.userId});
    //     //
    //     // if(user.length === 1) {
    //     //     let access = false;
    //     //     user = user[0];
    //     //
    //     //     user.profile.role.forEach(item => {
    //     //         if(item.role === 'staff') {
    //     //             access = true;
    //     //         }
    //     //     });
    //     //
    //     //     if(access || user.profile.vineyard_id.length > 0) {
    //     RegExp.escape = function(s) {
    //         return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    //     };
    //
    //     if(getValQuery === undefined) {
    //         return [];
    //     }
    //     else {
    //         let listUsers,
    //             newListVineyards = [],
    //             newListOrganizations = [];
    //
    //         listUsers = Meteor.users.find({
    //             "profile.firstName": {
    //                 $regex: RegExp.escape(getValQuery),
    //                 $options: 'i'
    //             }
    //         }).fetch();
    //
    //         for(let i = 0, len = listUsers.length; i < len; i++) {
    //             let item = item2 = listUsers[i];
    //
    //             if(item.profile.vineyard_id !== undefined) {
    //                 item.profile.vineyard_id.forEach((id) => {
    //                     newListVineyards.push(id);
    //                 });
    //             }
    //             else {
    //                 newListVineyards.push('empty');
    //             }
    //
    //             if(item2.profile.organization_id !== undefined) {
    //                 item2 = item2.profile.organization_id.forEach((id) => {
    //                     newListOrganizations.push(id);
    //                 });
    //             }
    //             else {
    //                 newListOrganizations.push('empty');
    //             }
    //         }
    //
    //         return [
    //             Meteor.users.find(
    //                 {
    //                     "profile.firstName": {
    //                         $regex: RegExp.escape(getValQuery),
    //                         $options: 'i'
    //                     }
    //                 },
    //                 {
    //                     limit: 10,
    //                     fields: {
    //                         "_id": 1,
    //                         "profile.firstName": 1,
    //                         "profile.organization_id": 1,
    //                         "profile.vineyard_id": 1,
    //                         "profile.role": 1
    //                     }
    //                 }
    //             ),
    //             Vineyards.find({_id: {
    //                 $in: newListVineyards
    //             }}),
    //             Organizations.find({_id: {
    //                 $in: newListOrganizations
    //             }})
    //         ]
    //     }
    //});

    // Meteor.publish( 'groups', function() {
    //     return Groups.find();
    // });

    // Accessing this.userId inside a publication
    // Meteor.publish('users', function() {
    //
    //     return Meteor.users.find();
    //     // if (!this.userId) {
    //     //     return this.ready();
    //     // }
    //     //
    //     // return Users.find({
    //     //     userId: this.userId
    //     // }, {
    //     //     fields: Users.publicFields
    //     // });
    // });

    // Meteor.publish('customers.list', function (ownerId) {
    //     const selector = {ownerId};
    //     const options = {
    //         fields: {_id: 1, name: 1},
    //         sort: {name: 1},
    //     };
    //
    //     return Customers.find(selector, options);
    // });
    //
    // Meteor.publish('customers.single', function (customerId) {
    //     check(customerId, String);
    //     const selector = {_id: customerId};
    //     return Customers.find(selector);
    // });


    // //Meteor.publish('orders', function (ownerId) {
    // Meteor.publish('orders', function () {
    //     //check(ownerId, String);
    //     //const selector = {ownerId};
    //     // const options = {
    //     //     fields: {_id: 1, owner: 1, status:1, createdAt:1},
    //     //     sort: {createdAt: -1},
    //     // };
    //     //
    //     // return Orders.find(selector, options);
    //
    //     return Orders.find();
    // });
    //
    // Meteor.publish('orders.single', function (orderId) {
    //     check(orderId, String);
    //     const selector = {_id: orderId};
    //     return Orders.find(selector);
    // });
    //
    //
    // Meteor.publish('orderLines.list', function (orderId) {
    //     check(orderId, String);
    //     const selector = {orderId};
    //     const options = {
    //         fields: {_id: 1, customer: 1},
    //         sort: {createdAt: -1},
    //     };
    //
    //     return OrderLines.find(selector, options);
    // });
    //
    // Meteor.publish('orderLines.single', function (orderLinesId) {
    //     check(orderLinesId, String);
    //     const selector = {_id: orderLinesId};
    //     return OrderLines.find(selector);
    // });
    //
    // Meteor.publish('discounts.list', function (ownerId) {
    //     check(ownerId, String);
    //     const selector = {ownerId};
    //     const options = {
    //         fields: {_id: 1, customer: 1},
    //         sort: {createdAt: -1},
    //     };
    //
    //     return Discounts.find(selector, options);
    // });
    //
    // Meteor.publish('discounts.single', function (DiscountId) {
    //     check(DiscountId, String);
    //     const selector = {_id: DiscountId};
    //     return Discounts.find(selector);
    // });

});