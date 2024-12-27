// router.js
import { createRouter, createRoute, createRootRoute, Outlet} from '@tanstack/react-router'
import HomePage from './app/home/home'
import ProductsPage from './app/product/product'
import AboutPage from './app/about/about'
import Login from './app/login/login'
import Dashboard from './app/dashboard/dashboard'



// Create routes
const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Login,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home',
  component: HomePage,
})

const productsRoute = createRoute({
  getParentRoute: () => homeRoute,
  path: '/products',
  component: ProductsPage,
})

const aboutRoute = createRoute({
  getParentRoute: () => homeRoute,
  path: '/about',
  component: AboutPage,
})

const dashboardRoute = createRoute({
  getParentRoute: () => homeRoute,
  path: '/dashboard',
  component: Dashboard,
})

homeRoute.addChildren([dashboardRoute,productsRoute, aboutRoute])


// Create the router instance
export const router = createRouter({
  routeTree: rootRoute.addChildren([loginRoute,homeRoute]),
})


