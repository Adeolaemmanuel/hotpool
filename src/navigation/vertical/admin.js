import { Mail, Settings } from 'react-feather'

export default [
    {
        header: 'Administration'
    },
    {
        id: 'billing',
        title: 'Billing',
        icon: <Mail size={20} />,
        navLink: '/billing'
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: <Settings size={20} />,
        navLink: '/settings'
    }
]
