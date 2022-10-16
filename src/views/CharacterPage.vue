<template>
	<main>
		<template v-if="character !== null">
			<h3>{{ character.name }}</h3>
			<div class="imgBox">
				<img :src="character.img" :alt="character.name" />
			</div>
		</template>
	</main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

import { getCharacterById } from './../services/breakingBadApi';

import { BreakingBadCharacter } from '../types/BreakingBad.interface';

const route = useRoute();
const { characterId } = route.params;

const character = ref<BreakingBadCharacter | null>(null);

onBeforeMount(async () => {
	character.value = await getCharacterById(Number(characterId));
});
</script>

<style scoped></style>
