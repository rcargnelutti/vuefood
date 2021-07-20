import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Cart from '@/pages/Cart';

const routes = [
    {
        path: '/carrinho',
        component: Cart,
        name: 'cart'
    },

    {
        path: '/loja',
        component: Home,
        name: 'home'
    },

    {
        path: '/',
        component: Home,
        name: 'home'
    },


]

export default routes