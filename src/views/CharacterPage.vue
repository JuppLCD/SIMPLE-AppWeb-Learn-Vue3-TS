<template>
	<main>
		<Container>
			<template v-if="character !== null">
				<h3>{{ character.name }}</h3>
				<div class="imgBox">
					<img :src="character.img" :alt="character.name" />
				</div>
				<p>
					Birthday : {{ character.birthday }} <br />
					Status : {{ character.status }} <br />
					NickName : {{ character.nickname }} <br />
					Ocupation: [ {{ character.occupation.join() }} ] <br />
				</p>
			</template>
		</Container>
	</main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { getCharacterById } from './../services/breakingBadApi';

import { BreakingBadCharacter } from '../types/BreakingBad.interface';

import Container from '../components/Container.vue';

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

<style scoped>
.imgBox {
	margin: auto;
	width: 300px;
	height: 400px;
}
.imgBox img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
