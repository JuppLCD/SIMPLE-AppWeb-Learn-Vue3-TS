<script setup lang="ts">
import type { BreakingBadCharacter } from '../types/BreakingBad.interface';

const { character } = defineProps<{ character: BreakingBadCharacter }>();
</script>

<template>
	<li>
		<h3>{{ character.name }}</h3>
		<div class="imgBox">
			<img :src="character.img" :alt="character.name" />
		</div>
	</li>
</template>

<style scoped>
li {
	list-style: none;
	margin: 0 10px;
	margin-bottom: 30px;
	border: 1px solid #fff;
	background-color: black;
}
.imgBox {
	width: 300px;
	height: 400px;
}
.imgBox img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
