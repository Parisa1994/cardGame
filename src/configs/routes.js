import MasterPage from './../containers/master-page';

import Home from './../pages/home';

export default [
    {
        exact       : true,
        path        : '/',
        Component   : Home,
        Layout      : MasterPage
    }

]