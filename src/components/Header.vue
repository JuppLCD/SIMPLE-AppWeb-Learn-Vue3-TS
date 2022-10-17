<template>
	<header>
		<Container>
			<nav class="nav">
				<RouterLink :to="{ name: 'home' }"> Home </RouterLink>
				<!--
					<button @click="isMenuOpen = !isMenuOpen">Menu</button>
					<ul>
						<li>LINK</li>
						<li>{{ isMenuOpen ? 'open' : 'close' }}</li>
					</ul>
				-->
			</nav>
		</Container>
	</header>
</template>

<script setup lang="ts">
import Container from './Container.vue';
</script>

<style scoped>
.nav {
	display: flex;
	justify-content: right;
	align-items: center;
	padding: 20px;
}
</style>
