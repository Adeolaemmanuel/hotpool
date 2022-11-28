import { LogOut, Mail, Settings } from 'react-feather'

export default [
    {
        header: 'Administration'
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: <Settings size={20} />,
        navLink: '/settings'
    }
    // {
    //     id: 'logout',
    //     title: 'Logout',
    //     icon: <LogOut size={20} />,
    //     // navLink: '/',
    //     onclick: dispatch(handleLogout())
    // }
]
