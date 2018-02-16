import HelloWorld from '../components/HelloWorld'
import AccountsList from '../components/Accounts/List'
import AccountsView from '../components/Accounts/View'
import AccountsCreate from '../components/Accounts/Create'
import AccountsEdit from '../components/Accounts/Edit'

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
        path: '/contas/novo',
        name: 'AccountsCreate',
        component: AccountsCreate
    },
    {
        path: '/contas/:id',
        name: 'AccountsView',
        component: AccountsView
    },
    {
        path: '/contas/:id/editar',
        name: 'AccountsEdit',
        component: AccountsEdit
    }
];

export default routes
