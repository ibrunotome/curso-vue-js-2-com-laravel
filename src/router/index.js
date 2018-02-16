import HelloWorld from '../components/HelloWorld'
import AccountsList from '../components/Accounts/List'
import AccountsView from '../components/Accounts/View'

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
    },
    {
        path: '/contas/:id',
        name: 'AccountsList',
        component: AccountsView
    }
];

export default routes
