import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('../../views/dashboard/ecommerce')),
    exact: true
  },
  {
    path: '/overview',
    component: lazy(() => import('../../views/dashboard/overview')),
    exact: true
  }
]

export default DashboardRoutes
