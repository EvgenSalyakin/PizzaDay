import Layout from '../imports/layout/Layout';

import App from '../imports/ui/App';
import FacebookButton from '../imports/components/FacebookButton'

FlowRouter.route('/', {
    //name: "Start",
    action: function() {
        ReactLayout.render(Layout, {
            content: <App/>,
            fbContent: <FacebookButton/>
        });
    }
});

// FlowRouter.route('/home', {
//     name: "Home",
//     action: function() {
//         ReactLayout.render(Layout, {
//             content: <App/>,
//             fbContent: <FacebookButton/>
//         });
//     }
// });

// FlowRouter.route('/orders', {
//     name: "Orders",
//     action: function() {
//         ReactLayout.render(Layout, {
//             content: <App/>,
//             fbContent: <FacebookButton/>
//         });
//     }
// });

// FlowRouter.route("/", {
//
//     action() {
//         mount(App, {content: <Home />});
//     }
// });