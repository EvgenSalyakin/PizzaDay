import { Mongo } from 'meteor/mongo';

export const Orders = new Mongo.Collection('orders');
export const OrderLines = new Mongo.Collection('orderLines');
export const Discounts = new Mongo.Collection('discounts');
export const Customers = new Mongo.Collection('customers');