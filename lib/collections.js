import { Mongo } from 'meteor/mongo';

export const Groups = new Mongo.Collection('groups');
export const Orders = new Mongo.Collection('orders');
export const Discounts = new Mongo.Collection('discounts');