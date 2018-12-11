import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FirstRoute from '../components/FirstRoute'
import NotFound from '../components/NotFound'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Blog from '../components/Blog'
import Details from '../components/Details'
import ServiceChild from '../components/ServiceChild'

console.debug('firstroute', FirstRoute)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute

    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      name: 'Services',
      children: [
        {
          path: ':language',
          name: 'servicesChild',
          component: ServiceChild,
          props: true
        }
      ],
      component: Services
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/details/:pid',
      name: 'Details',
      component: Details,
      props: true
    },
    {path: '*', component: NotFound}

  ]
})
