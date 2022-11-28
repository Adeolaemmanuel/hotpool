import { Briefcase, Eye } from 'react-feather'

export default [
    {
        header: 'Workspace'
    },
    {
        id: 'overview',
        title: 'Overview',
        icon: <Eye size={20} />,
        navLink: '/overview'
    },
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: <Briefcase size={20} />,
        navLink: '/dashboard/analytics'
    }
]
