import { Book, Mail, Minimize2, User } from 'react-feather'

export default [
    {
        header: 'Products'
    },
    {
        id: 'transactions',
        title: 'Transactions',
        icon: <Minimize2 size={20} />,
        navLink: '/transactions'
    },
    {
        id: 'customers',
        title: 'Customers',
        icon: <User size={20} />,
        navLink: '/customers'
    },
    {
        id: 'billing',
        title: 'Billing',
        icon: <Mail size={20} />,
        navLink: '/billing'
    }
]
