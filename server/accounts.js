import { Accounts } from 'meteor/accounts-base';

export default () => {

    Accounts.onCreateUser((options, user) => {

        if (! user.services.facebook) {
            throw   new Error('Expected login with Facebook only.');
        }

        user.profile = options.profile || {};

        user.email = user.services.facebook.email;
        user.username = user.services.facebook.name;

        return user;
    });
}