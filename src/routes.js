import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Product from './pages/product/Product';

const ROUTES = [{
        path: '/',
        element: <Login /> ,
        title: 'Login'
    },
    {
        path: '/register',
        element: <Register /> ,
        title: 'Register'
    },
    {
        path: '/product/:productId',
        element: <Product /> ,
        title: 'Product'
    }];

export default ROUTES;