import Layout from '../layout/Layout';

import App from '../ui/App';
import FacebookButton from '../ui/FacebookButton';

FlowRouter.route('/', {
    action: function() {
        ReactLayout.render(Layout, {
            content: <App />,
            fbContent: <FacebookButton />
        });
    }
});
