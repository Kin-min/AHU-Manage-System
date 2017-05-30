import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import navbar from '../components/navbar.vue'
import main from '../components/main.vue'
import match from '../components/match.vue'
import register from '../components/register.vue'
import profile from '../components/profile.vue'
import manage from '../components/manage.vue'
import editMatch from '../components/editMatch.vue'
import createMatch from '../components/createMatch.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      components: {
        top: navbar,
        mid: main
      }
    },
    {
      path: '/match/:id',
      components: {
        top: navbar,
        mid: match
      }
    },
    {
      path: '/register',
      components: {
        top: navbar,
        mid: register
      }
    },
    {
      path: '/manage',
      components: {
        top: navbar,
        mid: manage
      }
    },
    {
      path: '/create',
      components: {
        top: navbar,
        mid: createMatch
      }
    },
    {
      path: '/edit_match/:id',
      components: {
        top: navbar,
        mid: editMatch
      }
    },
    {
      path: '/profile/:id',
      components: {
        top: navbar,
        mid: profile
      }
    }
  ]
})
