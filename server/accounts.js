import { Accounts } from 'meteor/accounts-base';

export default () => {

    Accounts.onCreateUser((options, user) => {
        if (! user.services.facebook) {
            throw new Error('Expected login with Facebook only.');
        }

        const { first_name, last_name } = user.services.facebook;
        user.initials = first_name[0].toUpperCase() + last_name[0].toUpperCase();

        return user;
    });
}