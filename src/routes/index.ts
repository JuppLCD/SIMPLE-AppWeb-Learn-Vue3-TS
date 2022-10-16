import { createRouter, createWebHashHistory } from 'vue-router';

import { HomePage, CharacterPage } from './../views';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: HomePage, name: 'home' },
		{ path: '/character/:characterId', component: CharacterPage, name: 'characterDetails' },
	],
});

export { router };
