<script setup lang="ts">
import { ref } from 'vue';

import { getAllCharacters } from './../services/breakingBadApi';

import type { BreakingBadCharacter } from '../types/BreakingBad.interface';
import CharacterDetails from './CharacterDetails.vue';

const allCharacters = ref<BreakingBadCharacter[]>([]);

(async () => {
	const characters = await getAllCharacters();
	allCharacters.value = characters;
})();
</script>

<template>
	<section>
		<h1>Breaking Bad Characters</h1>
		<p v-if="allCharacters.length === 0">No Characters</p>
		<ul v-else>
			<CharacterDetails v-for="character in allCharacters" :key="character.char_id" :character="character" />
		</ul>
	</section>
</template>

<style scoped>
h1 {
	text-align: center;
}
ul {
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
