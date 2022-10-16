<template>
	<header>
		<RouterLink :to="{ name: 'home' }"> Home </RouterLink>
		<!-- <button @click="isMenuOpen = !isMenuOpen">Menu</button>
		<nav>
			<ul>
				<li>LINK</li>
				<li>{{ isMenuOpen ? 'open' : 'close' }}</li>
			</ul>
		</nav> -->
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<style scoped></style>
