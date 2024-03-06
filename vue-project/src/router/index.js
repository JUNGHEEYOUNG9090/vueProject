import { createRouter, createWebHistory } from 'vue-router';

import TestComponent from '@/components/TestComponent.vue';
import TheListView from '@/views/TheListView.vue';

const routes = [
	{
		path: '/list',
		name: 'TheListView',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: TheListView,
	},
	{
		path: '/test',
		name: 'TestComponent',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: TestComponent,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});
export default router;
