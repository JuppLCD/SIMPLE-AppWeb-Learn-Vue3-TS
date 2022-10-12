<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

import { getAllCharacters, getCharactersByName } from './../services/breakingBadApi';

import type { BreakingBadCharacter } from '../types/BreakingBad.interface';

import CardCharacter from './CardCharacter.vue';
import Search from './Search.vue';

const allCharacters = ref<BreakingBadCharacter[]>([]);
const isLoading = ref<boolean>(false);
const isError = ref<boolean>(false);

onBeforeMount(async () => {
	isLoading.value = true;
	try {
		allCharacters.value = await getAllCharacters();
	} catch (err) {
		console.error(err);
		isError.value = true;
	} finally {
		isLoading.value = false;
	}
});

const handleSearch = async (searchName: string) => {
	isLoading.value = true;
	try {
		allCharacters.value = await getCharactersByName(searchName);
	} catch (err) {
		console.error(err);
		isError.value = true;
	} finally {
		isLoading.value = false;
	}
};
</script>

<template>
	<section>
		<h1>Breaking Bad Characters</h1>
		<Search @handleSearch="handleSearch" />
		<p v-if="isLoading">Loading...</p>
		<p v-else-if="isError">Error fetching characters</p>
		<p v-else-if="allCharacters.length === 0">No Characters</p>
		<ul v-else>
			<CardCharacter v-for="character in allCharacters" :key="character.char_id" :character="character" />
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
