import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Login from '@/views/Login.vue'
import Logout from '@/views/Logout.vue'
import Startmenu from '@/views/Startmenu.vue'
import Profile from '@/views/Profile.vue'
import newGameScreen from '@/components/newGameScreen.vue'
import newSportScreen from '@/components/newSportScreen.vue'
import gameScreen from '@/components/gameScreen.vue'
import newTeamScreen from '@/components/newTeamScreen.vue'
import Results from '@/components/Results.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Startmenu
		},
		{
			path: '/signin',
			name: 'signin',
			component: Login
		},
		{
			path: '/signout',
			name: 'signout',
			component: Logout
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
			meta: {
				authRequred: true
			}
		},
		{
			path: '/newGameScreen',
			name: 'newGameScreen',
			component: newGameScreen
		},
		{
			path: '/newSportScreen',
			name: 'newSportScreen',
			component: newSportScreen
		},
		{
			path: '/newTeamScreen',
			name: 'newTeamScreen',
			component: newTeamScreen
		},
		{
			path: '/gameScreen',
			name: 'gameScreen',
			component: gameScreen
		},
		{
			path: '/results',
			name: 'Results',
			component: Results
		}
	]
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.authRequred)) {
		if (!store.state.user) {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

export default router