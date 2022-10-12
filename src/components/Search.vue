<template>
	<label class="search">
		<input type="text" v-model="searchName" @keypress.enter="searchCharacters" placeholder="Search by Name" />
		<button @click="searchCharacters">Search</button>
	</label>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
	(e: 'handleSearch', searchByName: string): void;
}>();

const searchName = ref<string>('');

const searchCharacters = () => {
	emit('handleSearch', searchName.value);
};
</script>

<style scoped>
.search {
	width: 100%;
	max-width: 500px;
	margin: 20px auto;

	display: flex;
}
.search input {
	flex-grow: 1;
}
</style>
