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
import { useRoute, useRouter } from 'vue-router';

import { getCharacterById } from './../services/breakingBadApi';

import { BreakingBadCharacter } from '../types/BreakingBad.interface';

const route = useRoute();
const router = useRouter();
const { characterId } = route.params;

const character = ref<BreakingBadCharacter | null>(null);

onBeforeMount(async () => {
	const id = Number(characterId);

	// is NaN
	if (!Boolean(id)) {
		router.push({ name: 'notFound' });
		return;
	}
	const res = await getCharacterById(id);

	// not found character
	if (!Boolean(res)) {
		router.push({ name: 'notFound' });
		return;
	}

	character.value = res;
});
</script>

<style scoped></style>
