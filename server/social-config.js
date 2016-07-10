/**
 * Created by evgen on 09.07.16.
 */
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '948169941948479',
    secret: '9e0fd15128a345c9a697a81ae0a88aa9'
});

ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        "appId": "948169941948479",
        "secret": "9e0fd15128a345c9a697a81ae0a88aa9"}
    },
    { upsert: true }
);