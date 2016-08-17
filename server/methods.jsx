import {Customers, Orders, OrderLines, Discounts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

//export default function () {
    // changeTerminology(val) {
    //     check(val, String);
    //
    //     Meteor.users.update({_id: Meteor.userId()}, { $set: {
    //         "profile.terminology": val
    //     }});
    // },

    // Meteor.methods({
    //     'customers.create'(_id, name) {
    //         check(_id, String);
    //         check(name, String);
    //
    //         const customer = {_id, name};
    //         Customers.insert(customer);
    //     }
    // });
    Meteor.startup(() => {
    //     Meteor.methods({
    //         insertOrder() {
    //
    //             try {
    //                 if (!Meteor.userId()) {
    //                     throw new Meteor.Error('500', 'Must be logged in to add new order.');
    //                 }
    //                 var order = {ownerId: Meteor.userId(), createdAt: new Date(), status: 'New', totalSum: 0}
    //                 return Orders.insert(order);
    //             } catch (exception) {
    //                 throw new Meteor.Error('500', exception.message);
    //             }
    //         },
    //
    //         deleteOrder(id) {
    //
    //             try {
    //                 if (!Meteor.userId()) {
    //                     throw new Meteor.Error('500', 'Must be logged in to add new order.');
    //                 }
    //                 check(id, String);
    //                 return Orders.remove({_id: id});
    //             } catch (exception) {
    //                 throw new Meteor.Error('500', exception.message);
    //             }
    //         }
    //     });
    // })
    // Meteor.methods({
    //     'orders.create'(_id, owner, ownerId) {
    //         check(_id, String);
    //         check(ownerId, String);
    //         check(owner, String);
    //
    //         const createdAt = new Date();
    //         const status = 'New';
    //         const order = {_id, ownerId, owner, status, createdAt};
    //         Orders.insert(order);
    //     }
    // });

    // Meteor.methods({
    //     'orderLines.create'(_id, customerId, orderId) {
    //         check(_id, String);
    //         check(customerId, String);
    //         check(orderId, String);
    //
    //         const createdAt = new Date();
    //         const orderLines = {_id, orderId, customerId, createdAt};
    //         OrderLines.insert(orderLines);
    //     }
    // });
    //
    // Meteor.methods({
    //     'discounts.create'(_id, ownerId) {
    //         check(_id, String);
    //         check(ownerId, String);
    //
    //         const discount = {_id, ownerId};
    //         Discounts.insert(discount);
    //     }
     });
//}