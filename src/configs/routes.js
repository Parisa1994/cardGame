import MasterPage from './../containers/master-page';

import Home from './../pages/home';
import NotFound from './../pages/notfound';

export default [
    {
        exact       : true,
        path        : '/',
        Component   : Home,
        Layout      : MasterPage
    },
    {
        Component   : NotFound
    },

]