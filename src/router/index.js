import HelloWorld from '../components/HelloWorld'
import AccountsList from '../components/Accounts/List'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/contas',
        name: 'AccountsList',
        component: AccountsList
    }
];

export default routes
